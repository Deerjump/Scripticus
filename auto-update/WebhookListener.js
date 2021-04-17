const { autoUpdate: { branch } } = require('../config.json');
const Logger = require('../util/Logger.js');
const { exec } = require('child_process');
const express = require('express');
const crypto = require('crypto');
require('dotenv').config();

const logger = new Logger('Webhook');

class WebhookListener {
  
  constructor(client) {
    this.client = client;
  }

  start = function() {
    const PORT = 3000;
    const sigHeaderName = 'X-Hub-Signature-256';
    const sigHashAlg = 'sha256';
    const app = express();

    logger.log('Starting WebHookListener')

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

      const body = JSON.parse(req.rawBody);
      if (body.ref !== `refs/heads/${branch}`) {
        return logger.log(`Ignoring merge on branch: ${body.ref}`)
      }

      logger.log('Github webhook received.');
      try {
        logger.log(await runCommand('git remote update'));
        logger.log(await runCommand(`git reset --hard origin/${branch}`));
        logger.log(await runCommand('npm install'));
        logger.log(await runCommand('npm audit fix'));
        logger.log('Updated to new commit from Github!')
      } catch(err) {
        logger.error(err);
      }
    
      this.client.stop();
    });

    app.use((err, req, res, next) => {
      if (err) logger.error(err);
      res.status(403).send('Request body was not signed or verification failed!');
    })

    app.all('*', (req, res) => res.status(404).end());

    app.listen(PORT, async () => {
      logger.log(`Listening on ${PORT}`);
    });
  }
}

function runCommand(command) {
  logger.log(command);
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        //  reject(err);
      }
      if (stderr) {
        console.error(stderr)
        // reject(stderr);
      }
      if (stdout) {
        resolve('Done!');
      }
    });
  })
}

module.exports = WebhookListener;