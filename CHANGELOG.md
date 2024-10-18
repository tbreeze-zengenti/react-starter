# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2024-18-10

- New Contensis Forms package added along with component and Canvas form implementation, see [@contensis/forms](https://www.npmjs.com/package/@contensis/forms) or CONTENSIS_FORMS.md
- Removed Contensis type definitions in favour of new Contensis Delivery API wrapper type definitions
- Implmentend new typings from `contensis-delivery-api` where necessary
- Resolved undefined URI errors in Sitemap generation
- Resolved an issue with SkipToMain not being the first TAB element
- Renamed `models` to `types` in preparation for a future change

## [1.0.0] - 2024-29-08

- Cache invalidation fixes for v16 from CRB - refer to DELIVERY_API.md for more details
- Converted most aspects to fully utilise TypeScript
- Updated project and CI to use Node.js version 20
- Removed polyfill.io scripts due to security concerns
- ALL packages updated to latest suitable version
- Removed support for legacy browsers/builds
- Storybook upgraded to v8
- Added a new Welcome page for onboarding
- Added new Search and Content page examples
- Added Navbar example rendering top level SiteView nodes
- Added a configurable Sitemap
- Added support in-app for robots.txt
- Refactored SiteConfig pattern to support cache invalidation changes in CRB - refer to DELIVERY_API.md for more details
- Refactored and documented almost every component
- Renamed several components and folders, notably ContentTypeMapping.ts is now ContentTypeRoutes.ts
- Refactored Search structure and auto-loading of listings based on listingType keys
- Refactored Print styles to be a part of Styled Components
- Refactored withEvents to simplify the default behaviour
- Proxies reconfigured to work with webpack-dev-server
- Fixed several issues with `dev:server`
- Fixed an issue with loadable chunk names not being set

## [0.1.8] - 2024-18-01

- Upgraded @zengenti/contensis-react-base to 3.1.0
- Upgraded @contensis/react-canvas to 1.0.3
- Removed `react` alias from Webpack config
- Added "Quick Install" steps using `npx`

## [0.1.7] - 2024-17-01

- Basic Canvas example, see [@contensis/canvas-react](https://www.npmjs.com/package/@contensis/canvas-react) for more information on rendering Canvas data
- Updates to `deliveryAPI`, `cachedSearch`, & `getClientConfig` classes from CRB for better cache invalidation, see DELIVERY_API.md

## [0.1.6] - 2023-11-22

- Upgraded to Node 18 + NPM ^9.8.1
- Starter now using develop -> master Gitflow
- Merged [Uses slug instead of name for successful branch builds](https://gitlab.zengenti.com/starter-projects/react-starter/-/merge_requests/6)
- Removed legacy build
- Removed BrowserSync due to incompatibility, see: https://github.com/Va1/browser-sync-webpack-plugin/issues/83
- Upgraded Storybook build to work with blocks
- SiteConfig default entry link depth reduced to 0 and query fields MUST be defined by default
- Converted page type definitions to a .type file as opposed to a declaration file (.d.ts)

## [0.1.5] - 2023-08-21

- Merged ['storybook-7' to bring support for Storybook 7](https://gitlab.zengenti.com/starter-projects/react-starter/-/merge_requests/7)
- Added a standalone DeepLinkMeta component
- Merged 'chore/operation-purge-any' to improve typing across the project
- Docker builds now clear the npm cache to reduce image size for Blocks
- Support for Canonical paths via CRB
- Disabled Storybook builds until a viable Blocks method is supported
- Removed 'webpack-parallel' as a part of the SB7 merge

## [0.1.5] - 2023-07-08

### Added

- Upgraded Storybook to 7.2.1
- Updated Webpack to 5.88.2

### Removed

- Removed parallel-webpack due to incompatibility with newer version of Webpack, note: parallel-webpack not updated in 3+ years

## [0.1.4] - 2023-06-20

- Upgraded Storybook to 6.5.16 stable release
- Added support for Insytful Deep Link Meta to the Meta component
- Added Webpack 5.72 override to support Storybook
- Bumped caniuse-db to latest version

## [Released]

## [0.1.3] - 2023-05-05

### Changed

- Added support for Blocks routing
- Resolved bug with Sitemap ordering
- Node base image updated
- Added new Fields to Schema such as "entryThumbnail"
- Updated webpack-dev-server
- Removed "features" folder
- Search is now a top level folder
- Various bug fixes

## [0.1.2] - 2023-02-17

### Changed

- Contensis React Base `3.0.0` support 🥳
- Various updates to Contensis React Base since 3.0.0 release
- Support for Blocks deployment via an updated `gitlab-ci.yml`
- Merged `feature/meta-setup` to develop to provide out of the box SiteConfig support
- Added a `<Meta>` component for handling common site metadata
- Reviewed & updated types/convetions across the project
- Removed `/features` folder in favour of `/components`
- Removed `@zengenti/react-toolkit`

## [0.1.1] - 2022-07-01

### Changed

- @zengenti/contensis-react-base upgraded to `3.0.0-beta.70`
- zengenti-buildstartup-package upgraded to `0.0.17`

## [0.1.0] - 2022-06-29

### Added

- Added a manaully compiled CHANGELOG.md

### Changed

- Changed the `package.json` version to `0.0.1` to comply with the addition of this changelog.

## [Unreleased]

- [[chore/operation-purge-any]](https://gitlab.zengenti.com/starter-projects/react-starter/-/tree/chore/operation-purge-any) Removes all instances of `any` from the repository
- [[feature/gitlab-ci-may-2022]](https://gitlab.zengenti.com/starter-projects/react-starter/-/tree/feature/gitlab-ci-may-2022) Updated variations of the `gitlab-ci.yml` (minus blocks feature)
- [[feature/docker-multi-stage]](https://gitlab.zengenti.com/starter-projects/react-starter/-/tree/feature/docker-multi-stage) Docker multi-stage proof of concept
- [[feat/react-router-v6]](https://gitlab.zengenti.com/starter-projects/react-starter/-/tree/feat/react-router-v6) Support for React Router 6
