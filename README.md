![Zengenti React Start](/readme.png)

Commonly know as React Starter, this is our starter project for most client builds. It is driven by the latest version of Contensis React Base (currently v3.0) & utilises other internal packages such as Zengenti React Toolkit, & Zengenti Forms Package.

---

# Project guidelines

Below is an example of project guidelines, please modify to suit your project...

## Branches

### Develop (default) :bug:

This is the default branch where the majority of commits and development will take place. The develop branch is useful as it future proofs the repo for having live and preview links.

When setting up a new repo, you will need to create a develop branch, and set that as default in repo settings `settings/repository/default-branch`

### Master :zap:

This branch is the master branch, it shoould only contain code that is ready to be released.

### feature-featureName :exclamation:

Feature branches are optional, you can use a feature branch if you are doing one of the following:

- Adding an entirely new feature (search, data mapping etc.)
- Refactoring components/functionality
- Potential breaking changes to app functionality, this could affect colleagues progress.
- A spike/exploratory piece of code

## 📁Folder/File Structure

Components should be built inside the `components/` directory.

Components that leverage Redux should be built inside the `features/` directory.

Each Component should have it's own folder following the **PascalCase** naming convention, eg. `CourseCard`.

Files that make up the Component should follow **camelCase** naming conventions, eg. `courseCard.js`.

## 🚀 Git Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) structure for commit messages.

Example: `feat: header component`

## 🎨 Front end style guide

### Naming Conventions

Classes & Styles should follow the [BEM](http://getbem.com/introduction/) (Block, Element, Modifier) naming convention.

CSS-Tricks has a [good crash course on BEM](https://css-tricks.com/bem-101/).

Example:

- Block: `.course-card`
- Element: `.course-card__content`
- Modifier: `.course-card--wide`

### Units (rems / pixels)

We use `rem` to define our units. The project has a rem-reset so that `1rem = 10px`.

Media Queries are defined in pixels however.

### Layout

We have a `.wrapper` class in our Global Styles to help structure page layouts. There are modifiers of this class for different layouts.

### Browser Support

- Chrome, Firefox, Safari (latest 2 releases)
- Edge (Chromium)

## Code Review

Upon completing a JIRA task you should assign it to another developer for review. They will leave feedback via a JIRA comment for you to act upon. Feedback should be given using the [Netlify Feedback Ladders model](https://www.netlify.com/blog/2020/03/05/feedback-ladders-how-we-encode-code-reviews-at-netlify/).

- ⛰ Mountain / Blocking and requires immediate action
- 🧗‍♀️ Boulder / Blocking
- ⚪️ Pebble / Non-blocking but requires future action
- ⏳ Sand / Non-blocking but requires future consideration
- 🌫 Dust / Non-blocking, “take it or leave it”

## 📚 Storybook

This project uses storybook v6, create stories inside the component folder as `componentName.stories.js`


# Old Read Me

## Getting started

- Define your CMS environment in the `.env` file
- Set the project name and repo uri inside `package.json`
- Develop your features inside the `/src/app/features/` folder, create a new folder for each feature
- Tell the application to load any feature `reducers` and `sagas` when it starts
- Create pages in the `/src/app/pages/` folder to set your page layouts and load your components
- Define routes in your application, there are 'Static routes' and 'Content type mappings' which tell the application what pages are to be loaded and when certain routes / content type entries are loaded
- Import components using the import aliases e.g. `~/pages/MyPage` avoid importing components like `/src/app/pages/MyPage` or `../../../pages/MyPage`

## Key scripts :vertical_traffic_light: :page_with_curl:

- `npm install` - install dependencies so we can use the application
- `npm start` - start the application in development mode
- `npm run storybook` - start storybook in development mode
- `npm run build` - build the application into production-ready client and server-side bundles
- `npm run server` - start the application server same as we would as if it were deployed in production
- `npm run build:server` - build the application and start the server-side application from source code (allowing us to connect a debugger and stop on code that is executed server-side)

## Releasing to live

When you are ready to release your code it is best to change your version number and tag the release with the version number so it is easy to keep track of each release rather than date generated tags. The suggested workflow for releasing is as follows:

- Run `npm version major || minor || patch` see: [https://docs.npmjs.com/cli/version](https://docs.npmjs.com/cli/version)
- This will generate a new empty commit, push this and wait for the build to pass.
- Once the build has passed in gitlab, run `git tag release-{version-no}`
- Then run `git push origin release-{version-no}`

## Domains

## Live domains

| URL                                                                                        | Content Version | Branch  | Target        |
| ------------------------------------------------------------------------------------------ | --------------- | ------- | ------------- |
| [live.{alias}.contensis.cloud](http://live.{alias}.contensis.cloud/)                       | Published       | Master  | Release Tag   |
| [staging.live.{alias}.contensis.cloud](http://staging.live.{alias}.contensis.cloud/)       | Published       | Master  | Latest commit |
| [dev.live.{alias}.contensis.cloud](http://dev.live.{alias}.contensis.cloud/)               | Published       | Develop | Latest commit |
| [preview.{alias}.contensis.cloud](http://preview.{alias}.contensis.cloud/)                 | Draft           | Master  | Release Tag   |
| [staging.preview.{alias}.contensis.cloud](http://staging.preview.{alias}.contensis.cloud/) | Draft           | Master  | Latest commit |
| [dev.preview.{alias}.contensis.cloud](http://dev.preview.{alias}.contensis.cloud/)         | Draft           | Develop | Latest commit |

## Dev domains

| URL                                                                                                | Content Version | Branch  | Target        |
| -------------------------------------------------------------------------------------------------- | --------------- | ------- | ------------- |
| [live.{alias}-dev.contensis.cloud](http://live.{alias}-dev.contensis.cloud/)                       | Published       | Master  | Release Tag   |
| [staging.live.{alias}-dev.contensis.cloud](http://staging.live.{alias}-dev.contensis.cloud/)       | Published       | Master  | Latest commit |
| [dev.live.{alias}-dev.contensis.cloud](http://dev.live.{alias}-dev.contensis.cloud/)               | Published       | Develop | Latest commit |
| [preview.{alias}-dev.contensis.cloud](http://preview.{alias}-dev.contensis.cloud/)                 | Draft           | Master  | Release Tag   |
| [staging.preview.{alias}-dev.contensis.cloud](http://staging.preview.{alias}-dev.contensis.cloud/) | Draft           | Master  | Latest commit |
| [dev.preview.{alias}-dev.contensis.cloud](http://dev.preview.{alias}-dev.contensis.cloud/)         | Draft           | Develop | Latest commit |

## Storybook

| URL                                                                                          | Content Version | Branch | Target        |
| -------------------------------------------------------------------------------------------- | --------------- | ------ | ------------- |
| [storybook.latest.{alias}.contensis.cloud](http://storybook.latest.{alias}.contensis.cloud/) | N/A             | master | Latest commit |
