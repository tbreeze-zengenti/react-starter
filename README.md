![Zengenti React Start](/readme.png)

Commonly know as React Starter, this is our starter project for most client builds. It is driven by the latest version of Contensis React Base (currently v3.0) & utilises other internal packages such as Zengenti React Toolkit, & Zengenti Forms Package.

## 🔌 Getting started

- Define your CMS environment in the `.env` file
- Set the project name and repo uri inside `package.json`
- Run `npm i` to install the project
- Finally run `npm run start` to see your project in the browser

## 📜 Key scripts

- `npm install` - install dependencies so we can use the application
- `npm start` - start the application in development mode
- `npm run storybook` - start storybook in development mode
- `npm run build` - build the application into production-ready client and server-side bundles
- `npm run server` - start the application server same as we would as if it were deployed in production
- `npm run build:server` - build the application and start the server-side application from source code (allowing us to connect a debugger and stop on code that is executed server-side)

## 📁Folder Structure

- `/components` should contain the majority of your components.
- `/features` should contain components with extensive functionality (eg. Composer, Search) that may require several supporting components or functions (eg. Redux).
- `/layouts` should contain your various page wrappers. By default a MainLayout is provided.
- `/pages` should contain all of your page components.
- `/redux` should contain high-level Redux logic.
- `/routes` contains all of the Routing logic for the app.
- `/theme` contains your app's Styled Components theming.

## 🚀 Git Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) structure for commit messages.

Example: `feat: header component`

## Units (rems / pixels)

We use `rem` to define our units. The project has a rem-reset so that `1rem = 10px`.

Media Queries are defined in pixels however.

## 📚 Storybook

This project uses storybook v6, create stories inside the component folder as `componentName.stories.tsx`

## Releasing to live

When you are ready to release your code it is best to change your version number and tag the release with the version number so it is easy to keep track of each release rather than date generated tags. The suggested workflow for releasing is as follows:

- Run `npm version major || minor || patch` see: [https://docs.npmjs.com/cli/version](https://docs.npmjs.com/cli/version)
- This will generate a new empty commit, push this and wait for the build to pass.
- Once the build has passed in gitlab, run `git tag release-{version-no}`
- Then run `git push origin release-{version-no}`
