# Vercel API Example: File Upload

Related to support conversation with Vercel.

token read from env variable: `process.env.VERCEL_TEST_TOKEN`

```
yarn install
yarn start
```

Produces error:

```
res.status 400
res.json {
  error: {
    code: 'sha1sum_mismatch',
    message: "SHA1 sum of the file (7821587476f0529a1c4c46859139fe212fe33024) doesn't match the provided SHA1 sum (621d61ebade0cb43421d3ad40e555c5055a75991)"
  }
}
```

## Question

Looking for how to successfully generate the SHA1 hash and use it to post a file to the `https://api.vercel.com/v11/now/files` endpoint.

## Refs

- https://vercel.com/docs/api#endpoints/deployments/upload-deployment-files
- https://vercel.com/docs/integrations#webhooks/securing-webhooks (suggestiong from Ismael)
