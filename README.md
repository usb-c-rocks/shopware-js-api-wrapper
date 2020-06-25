# shopware-api-client

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> An API client for shopware 6

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `shopware-api-client` dependency to your project

```bash
yarn add shopware-api-client # or npm install shopware-api-client
```

2. Add `shopware-api-client` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'shopware-api-client',

    // With options
    ['shopware-api-client', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Lennart Zellmer <lennart+git@zellmer.dev>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/shopware-api-client/latest.svg
[npm-version-href]: https://npmjs.com/package/shopware-api-client

[npm-downloads-src]: https://img.shields.io/npm/dt/shopware-api-client.svg
[npm-downloads-href]: https://npmjs.com/package/shopware-api-client

[github-actions-ci-src]: https://github.com//workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com//actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/.svg
[codecov-href]: https://codecov.io/gh/

[license-src]: https://img.shields.io/npm/l/shopware-api-client.svg
[license-href]: https://npmjs.com/package/shopware-api-client
