# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Pending]

- Starter now using develop -> master Gitflow
- Merged [Uses slug instead of name for successful branch builds](https://gitlab.zengenti.com/starter-projects/react-starter/-/merge_requests/6)

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
