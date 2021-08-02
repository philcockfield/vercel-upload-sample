import crypto from 'crypto';
import fs from 'fs-extra';
import { resolve } from 'path';
import { http } from '@platform/http';

const token = process.env.VERCEL_TEST_TOKEN ?? '';

function toSha1(file: Buffer) {
  return crypto.createHmac('sha1', token).update(file).digest('hex');
}

/**
 * See:
 *    https://vercel.com/docs/api#endpoints/deployments/upload-deployment-files
 *
 * Suggestion from Vercel suuport (example) of generating a
 * SHA1 digest hash for file upload:
 *
 *    https://vercel.com/docs/integrations#webhooks/securing-webhooks
 *
 */
async function sample() {
  const path = resolve('static/hand.png');
  const file = await fs.readFile(path);
  const hash = toSha1(file);

  const headers = {
    Authorization: `Bearer ${token}`,
    'x-vercel-digest': hash,
    'Content-Length': file.byteLength.toString(),
    'Content-Type': 'application/octet-stream',
  };

  const url = 'https://api.vercel.com/v2/now/files';
  const res = await http.post(url, file, { headers });

  console.log('res.status', res.status);
  console.log('res.json', res.json);
}

sample();
