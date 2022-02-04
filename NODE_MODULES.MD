# Current State of Project's Node Modules

## Vulnerabilities

| Severity | Package       | Dependancy of                      |
| -------- | ------------- | ---------------------------------- |
| high     | glob-parent   | webpack@4.46.0                     |
| high     | trim          | @storybook/addon-essentials@6.1.21 |
| moderate | postcss       | @storybook/addon-essentials@6.1.21 |
| moderate | semver-regex  | image-webpack-loader@8.1.0         |
| high     | trim-newlines | imagemin-webpack-plugin@2.4.2      |
| moderate | nth-check     | imagemin-webpack-plugin@2.4.2      |

---

## Depracated / Outdated Dependancies

### Webpack 4

`querystring@0.2.0` is a deprecated dependancy, updating to Webpack 5 should fix this.

### imagemin-webpack-plugin

Several dependancies of this package are deprecated.

### Nested dependancies require updating

The following packages are outdated / deprecated. Their parent packages don't currently have fixes.

| Package    | Version  |
| ---------- | -------- |
| formidable | >= 2     |
| chokidar   | >= 3     |
| debug      | >= 4.3.1 |
| uuid       | >= 7     |
| superagent | >= 7.0.2 |
| svgo       | >= 2     |
| core-js    | > 3.4    |

When NPM v8 is released these could be overwritten using `overrides` feature.

There is the option of using a package such as [`npm-force-resolutions`](https://www.npmjs.com/package/npm-force-resolutions), however in testing this can cause potential problems with the package-lock.json

---

## Webpack 5

Proposal to update project to webpack 5.

Further investigation required to ensure project compatability with upgrading to webpack 5.

Initial discovery indicates the following packages are not currently compatible with webpack 5.

- storybook (experimental support for webpack 5)
- @loadable/webpack-plugin

The following packages cannot be updated to their latest versions without webpack 5

- html-webpack-plugin
- copy-webpack-plugin
- css-loader

---

## Other Notes

`eslint-webpack-plugin@latest` not compatible with eslint >= 8
