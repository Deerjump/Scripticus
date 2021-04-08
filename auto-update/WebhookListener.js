const { autoUpdate: { branch, enabled } } = require('../config.json');
const { exec } = require('child_process');
const express = require('express');
const crypto = require('crypto');
const { rejects } = require('assert');
require('dotenv').config();

const WEBHOOK = '[Webhook]';

class WebhookListener {
  
  constructor(client) {
    this.client = client;
  }

  start = function() {
    const PORT = 3000;
    const sigHeaderName = 'X-Hub-Signature-256';
    const sigHashAlg = 'sha256';
    const app = express();

    console.log(WEBHOOK, 'Starting WebHookListener')

    app.use(express.json({ 
      verify: (req, res, buf, encoding) => {
        if (buf?.length) {
          req.rawBody = buf.toString(encoding || 'utf8');
        } 
      }
    }));

    function verifyPostData(req, res, next) {
      if (!req.rawBody) {
        return next('Request body empty');
      }

      const sig = Buffer.from(req.get(sigHeaderName) || '', 'utf8');
      const hmac = crypto.createHmac(sigHashAlg, process.env.SECRET);
      const digest = Buffer.from(`${sigHashAlg}=${hmac.update(req.rawBody).digest('hex')}`, 'utf8' )
      if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
        return next(`Request body digest (${digest}) did not match ${sigHeaderName} (${sig})`)
      }

      return next();
    }

    app.post('/hook', verifyPostData, async (req, res) => {
      res.status(200).send('Request body was signed!');
      console.log(WEBHOOK, 'Github webhook received.');
      // try {
      runCommand('git remote update');
      runCommand(`git reset --hard origin/${branch}`);
      runCommand('npm install');
      runCommand('npm audit fix');
      // } catch(err) {
      //   console.log(err);
      // }
      console.log(WEBHOOK, 'Updated to new commit from Github!')
    
      this.client.stop();
    });

    app.use((err, req, res, next) => {
      if (err) console.error(WEBHOOK, err);
      res.status(403).send('Request body was not signed or verification failed!');
    })

    app.all('*', (req, res) => res.status(404).end());

    app.listen(PORT, async () => {
      console.log(WEBHOOK, `Listening on ${PORT}`);
    });
  }
}

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err)  reject(err);
      if (stderr) reject(stderr);
      if (stdout) resolve(stdout);
    });
  }).then(console.log).catch(console.err);
}

module.exports = WebhookListener;