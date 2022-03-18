import { AutoUpdateOptions, Scripticus } from '@customTypes';
import { Logger } from '../utils/logger';
import { exec } from 'child_process';
import express from 'express';
import crypto from 'crypto';

class WebhookListener {
  private readonly SIG_HEADER_NAME = 'X-Hub-Signature-256';
  private readonly SIG_HASH_ALG = 'sha256';
  private readonly logger = new Logger('AutoUpdate');
  private readonly app = express();
  private readonly branch: string;
  private readonly client: Scripticus;
  private readonly PORT: number;
  private readonly secret: string;

  constructor(client: Scripticus, secret: string, { branch, port }: AutoUpdateOptions) {
    if (secret == undefined)
      throw TypeError(
        'secret cannot be undefined!\nConsider disabling auto-update in the options.'
      );
    this.secret = secret;
    this.PORT = port;
    this.client = client;
    this.branch = branch;
    this.init();
  }

  // TODO: Arguments might benefit from stricter typings
  private verifyPostData(req: any, res: any, next: any) {
    if (!req.rawBody) {
      return next('Request body empty');
    }

    const sig = Buffer.from(req.get(this.SIG_HEADER_NAME) ?? '', 'utf8');
    const hmac = crypto.createHmac(this.SIG_HASH_ALG, this.secret);
    const digest = Buffer.from(
      `${this.SIG_HASH_ALG}=${hmac.update(req.rawBody).digest('hex')}`,
      'utf8'
    );
    if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
      return next(`Request body digest (${digest}) did not match ${this.SIG_HEADER_NAME} (${sig})`);
    }

    return next();
  }

  private runCommand(command: string): Promise<void> {
    this.logger.log(command);
    return new Promise<void>((resolve, reject) => {
      exec(command, (err, stdout, stderr) => {
        if (err) reject(err);
        if (stderr) this.logger.log(stderr);
        if (stdout) this.logger.log(stdout);
        resolve();
      });
    });
  }

  private init() {
    this.logger.log('Configuring WebHookListener');

    this.app.use(
      express.json({
        verify: (req: any, res: any, buf: Buffer, encoding: BufferEncoding) => {
          if (buf?.length) {
            req.rawBody = buf.toString(encoding ?? 'utf-8');
          }
        },
      })
    );

    this.app.post('/hook', (...args) => this.verifyPostData(...args), async (req: any, res: any) => {
      res.status(200).send('Request body was signed!');

      const body = JSON.parse(req.rawBody);
      if (body.ref !== `refs/heads/${this.branch}`) {
        return this.logger.log(`Ignoring merge on branch: ${body.ref}`);
      }

      this.logger.log('Github webhook received.');
      try {
        await this.runCommand('git remote update');
        await this.runCommand(`git reset --hard origin/${this.branch}`);
        await this.runCommand('sudo yarn install');
        await this.runCommand('yarn build');
        this.logger.log('Updated to new commit from Github!');
      } catch (err) {
        return this.logger.error(err);
      }

      this.client.stop();
    });

    this.app.use((err: any, req: any, res: any, next: any) => {
      if (err) this.logger.error(err);
      res.status(403).send('Request body was not signed or verification failed!');
    });

    this.app.all('*', (req, res) => res.status(404).end());
  }

  start() {
    this.logger.log('Starting WebHookListener');
    this.app.listen(this.PORT, async () => {
      this.logger.log(`Listening on ${this.PORT}`);
    });
    return this;
  }
}

export { WebhookListener };
