# shopware-js-api-wrapper

Compatibility with Shopware:

[![shopware-ver](https://img.shields.io/badge/version%20RC1-6.2.0-orange)](https://github.com/shopware/platform/releases/tag/v6.2.0-RC1)

## Table of Contents

- [Overview](#overview)
- [Setup](#setup)
- [Development](#development)
- [Documentation](#documentation)
- [Thanks](#thanks)
- [License](#license)

## Overview

[Shopware](https://www.shopware.com/en/) provides a shop api. The shopware-js-api-wrapper provides a wrapper for this api to use it as functions in js.

## Setup

1. Link `shopware-js-api-wrapper` to yarn

```bash
git clone https://github.com/usb-c-rocks/shopware-js-api-wrapper
```
```bash
cd shopware-js-api-wrapper
```
```bash
yarn && yarn build && yarn link
```

2. Link `shopware-js-api-wrapper` to your project

```bash
cd yourProjectDirectory
```
```bash
yarn link shopware-js-api-wrapper
```

3. Use `shopware-js-api-wrapper` in your project

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## Documentation

// TODO

## Thanks

This project is based on the [shopware-pwa](https://github.com/DivanteLtd/shopware-pwa) api client.

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
