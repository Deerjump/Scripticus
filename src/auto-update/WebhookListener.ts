import { autoUpdate } from '../config.json';
import chalk from 'chalk';
import 'dotenv/config';
import { Logger } from '../util/Logger';
import { exec } from 'child_process';
import { Client } from 'discord.js';
import express from 'express';
import crypto from 'crypto';

// TODO: is this necessary if it is done in the bot.ts? Also should it just be passed down?
import 'dotenv/config';
const logger = new Logger('Webhook');

class WebhookListener {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  start = () => {
    const PORT = 3000;
    const sigHeaderName = 'X-Hub-Signature-256';
    const sigHashAlg = 'sha256';
    const app = express();

    logger.log('Starting WebHookListener');

    // TODO: improve typings on the verify function
    app.use(
      express.json({
        verify: (req: any, res: any, buf: Buffer, encoding: BufferEncoding) => {
          if (buf?.length) {
            req.rawBody = buf.toString(encoding ?? 'utf-8');
          }
        },
      })
    );

    // TODO: I don't know what the type of next is right now, will come back to it later
    function verifyPostData(req: any, res: any, next: any) {
      if (!req.rawBody) {
        return next('Request body empty');
      }

      const sig = Buffer.from(req.get(sigHeaderName) ?? '', 'utf8');
      const hmac = crypto.createHmac(sigHashAlg, process.env.SECRET!);
      const digest = Buffer.from(
        `${sigHashAlg}=${hmac.update(req.rawBody).digest('hex')}`,
        'utf8'
      );
      if (
        sig.length !== digest.length ||
        !crypto.timingSafeEqual(digest, sig)
      ) {
        return next(
          `Request body digest (${digest}) did not match ${sigHeaderName} (${sig})`
        );
      }

      return next();
    }

    // TODO: figure out typing here too
    app.post('/hook', verifyPostData, async (req: any, res: any) => {
      res.status(200).send('Request body was signed!');

      const body = JSON.parse(req.rawBody);
      if (body.ref !== `refs/heads/${autoUpdate.branch}`) {
        return logger.log(`Ignoring merge on branch: ${body.ref}`);
      }

      logger.log('Github webhook received.');
      try {
        await runCommand('git remote update');
        await runCommand(`git reset --hard origin/${autoUpdate.branch}`);
        await runCommand('npm install');
        await runCommand('npm audit fix');
        logger.log('Updated to new commit from Github!');
      } catch (err) {
        return logger.error(err);
      }

      // TODO: 
      this.client.stop();
    });

    // TODO: parameter typing
    app.use((err: any, req: any, res: any, next: any) => {
      if (err) logger.error(err);
      res
        .status(403)
        .send('Request body was not signed or verification failed!');
    });

    app.all('*', (req, res) => res.status(404).end());

    app.listen(PORT, async () => {
      logger.log(`Listening on ${PORT}`);
    });
  };
}

// TODO: command will have an Interface but it doesn't currently.
function runCommand(command: any): Promise<any> {
  logger.log(command);
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) reject(err);
      if (stderr) logger.log(stderr);
      if (stdout) logger.log(stdout);
      resolve();
    });
  });
}

export { WebhookListener };
