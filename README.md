# shopware-js-api-wrapper

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> An API wrapper for shopware 6 store and SalesChannel api

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `shopware-js-api-wrapper` dependency to your project

```bash
yarn add shopware-js-api-wrapper # or npm install shopware-js-api-wrapper
```

2. Add `shopware-js-api-wrapper` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'shopware-js-api-wrapper',

    // With options
    ['shopware-js-api-wrapper', { /* module options */ }]
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
[npm-version-src]: https://img.shields.io/npm/v/shopware-js-api-wrapper/latest.svg
[npm-version-href]: https://npmjs.com/package/shopware-js-api-wrapper

[npm-downloads-src]: https://img.shields.io/npm/dt/shopware-js-api-wrapper.svg
[npm-downloads-href]: https://npmjs.com/package/shopware-js-api-wrapper

[github-actions-ci-src]: https://github.com//workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com//actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/.svg
[codecov-href]: https://codecov.io/gh/

[license-src]: https://img.shields.io/npm/l/shopware-js-api-wrapper.svg
[license-href]: https://npmjs.com/package/shopware-js-api-wrapper
