import { AutoUpdateOptions, Scripticus } from '@customTypes';
import { Logger } from '../utils/logger';
import { exec } from 'child_process';
import express from 'express';
import crypto from 'crypto';

class WebhookListener {
  private readonly sigHeaderName = 'X-Hub-Signature-256';
  private readonly sigHashAlg = 'sha256';
  private readonly app: express.Express;
  private readonly branch: string;
  private readonly client: Scripticus;
  private readonly PORT: number;
  private readonly logger: Logger;
  private readonly secret: string;

  constructor(client: Scripticus, secret: string, { branch, port }: AutoUpdateOptions) {
    if (secret == null) throw TypeError('secret cannot be null!')
    this.secret = secret;
    this.PORT = port;
    this.client = client;
    this.branch = branch;
    this.logger = new Logger('AutoUpdate');
    this.app = express();
    this.init();
  }

  // TODO: Arguments might benefit from stricter typings
  private verifyPostData(req: any, res: any, next: any) {
    if (!req.rawBody) {
      return next('Request body empty');
    }

    const sig = Buffer.from(req.get(this.sigHeaderName) ?? '', 'utf8');
    const hmac = crypto.createHmac(this.sigHashAlg, this.secret);
    const digest = Buffer.from(
      `${this.sigHashAlg}=${hmac.update(req.rawBody).digest('hex')}`,
      'utf8'
    );
    if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
      return next(
        `Request body digest (${digest}) did not match ${this.sigHeaderName} (${sig})`
      );
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

    this.app.post('/hook', this.verifyPostData, async (req: any, res: any) => {
      res.status(200).send('Request body was signed!');

      const body = JSON.parse(req.rawBody);
      if (body.ref !== `refs/heads/${this.branch}`) {
        return this.logger.log(`Ignoring merge on branch: ${body.ref}`);
      }

      this.logger.log('Github webhook received.');
      try {
        await this.runCommand('git remote update');
        await this.runCommand(`git reset --hard origin/${this.branch}`);
        await this.runCommand('npm install');
        await this.runCommand('npm audit fix');
        this.logger.log('Updated to new commit from Github!');
      } catch (err) {
        return this.logger.error(err);
      }

      this.client.stop();
    });

    this.app.use((err: any, req: any, res: any, next: any) => {
      if (err) this.logger.error(err);
      res
        .status(403)
        .send('Request body was not signed or verification failed!');
    });

    this.app.all('*', (req, res) => res.status(404).end());
  }

  public start() {
    this.logger.log('Starting WebHookListener');
    this.app.listen(this.PORT, async () => {
      this.logger.log(`Listening on ${this.PORT}`);
    });
  }
}

export { WebhookListener };
