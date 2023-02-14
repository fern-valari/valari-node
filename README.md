# Valari Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/valari)](https://www.npmjs.com/package/@fern-api/valari)

The Valari Node.js library provides access to the Valari API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://valari.readme.io/).

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-mlbksm?file=app.ts&view=editor)

```typescript
import { ValariApiClient } from '@fern-api/valari';

const client = new ValariApiClient({
  token: 'MY_TOKEN',
});

const response = await client.linkSession.create({
  data: {
    type: 'linkSession',
    attributes: {
      ip: '127.0.0.1',
      successUrl: 'https://myapp.com/success',
      errorUrl: 'https://myapp.com/error',
    },
  },
});

console.log('Received response from Valari!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-valari/valari-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
