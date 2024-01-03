![Zengenti React Start](/readme.png)

Commonly know as React Starter, this is our starter project for most client builds. It is driven by the latest version of Contensis React Base (currently v3.0.0) & utilises other internal packages such as our [Canvas](https://github.com/contensis/canvas) and [Forms](https://gitlab.zengenti.com/zengenti-packages/forms) packages.

## 🔌 Getting started

- Define your CMS environment in the `.env` file
- Set the project name and repository URL inside `package.json`
- Run `npm i` to install the project
- Finally, run `npm run start` to see your project in the browser

For full compatibility please ensure you are running Node 18 & a suitably modern version of NPM (7+) before installing.

If you encounter any installation issues you should remove your `/node_modules` folder & run `npm install --legacy-peer-deps`.

## 📜 Key scripts

- `npm install` - install dependencies so we can use the application
- `npm start` - start the application in development mode
- `npm run storybook` - start storybook in development mode
- `npm run build` - build the application into production-ready client and server-side bundles
- `npm run server` - start the application server same as we would as if it were deployed in production
- `npm run build:server` - build the application and start the server-side application from source code (allowing us to connect a debugger and stop on code that is executed server-side)

## 🌎 Environments

This project requires an `.env` file to be defined in the root. This file contains the core information required to connect to the project's CMS environment. The default `.env` supplied connects the project to our Leif Demo CMS to drive example pages inside the app.

By default, the `npm start` & `npm run build` scripts will utilise the `.env` file in the root directory. You may create more env files for different CMS environments by applying a suffix `.{suffix}` to the file name. For example a development env might look like: `.env.development`

To activate an alternative env upon start/build you need to reference the `.{suffix}` in this script: `npm --env={suffix} run-script start`.

## 📁Folder Structure

- `/components` should contain the majority of your components.
- `/layouts` should contain your various page wrappers. By default a MainLayout is provided.
- `/pages` should contain all of your page components.
- `/redux` should contain high-level Redux logic.
- `/routes` contains all of the Routing logic for the app.
- `/theme` contains your app's Styled Components theming.

## 🎨 Styled Components

This project has a simple TypeScript implementation of Styled Components. The values within `styled.d.ts` must be maintained as you expand your theme to keep TypeScript happy.

The `theme/colors.ts` file provides a basic example of working with multiple color palettes.

The `theme/layout.ts` file has a handful of pre-defined breakpoints that are utilised to generated `min` & `max` media queries. A basic spacing object is provided based upon an 8px grid.

Finally, the `theme/globalStyles` includes both `normalize` & a custom reset (you may disable `normalize` by commenting it out), a basic CSS Variables setup should you wish to use them, various helper classes (for example `.sr-only` for accomodating screen readers).

## 📏 Units

We use `rem` to define our the majority of our units - do this end the project has a rem-reset so that `1rem = 10px`.

It's recommended to use rems for the majority of your units but do not rely on them in every use case. Pixels & em's have their place. For example:

- Pixels are great for setting fixed-sizes that the user cannot change such as borders.
- Ems are perfect for typography rhythm as they compliment the font-size being set in rems.

Media Queries are defined in pixels but the Theme object is scoped to allow other units.

## 📚 Storybook

This project uses storybook v7, create stories inside the component folder as `componentName.stories.tsx`

### Storybook + Blocks

1. Goto `.gitlab-ci.yml` and uncomment relevant storybook build steps.
   1. Be sure to update variables where applicable.
2. Commit & Push to GitLab repo so that Storybook is built and then pushed to Contensis.
3. Create a Siteview Node, typically this will be `/storybook`
4. Assign Renderer to new Siteview Node, aka the block that should just have been built and pushed to Contensis.

## 👌 Entry Picker Addon

The [Contensis Entry Picker Addon](https://github.com/contensis/contensis-entry-picker-storybook-addon) is installed for Storybook. The `Tag` component is provided as working example.

## 🦘 SkipToMainContent

Provided is a basic `skipToMainContent` for accessibility purposes. It's loaded into `App.tsx` & has a customisable `path` prop.

By default, this will skip to the `#main` tag defined in `layouts/main.layout.tsx`

## ⭐ Favicons

Favicons are stored in `public/icon` & exported to `dist/static/icon` upon build. For every project you should update the favicons & associated `manifest.json` file. You can make a copy of this [Figma file](https://www.figma.com/community/file/1309311685447830983) to generate the appropriate favicons & simply export them to the `public/icon` directory. The imports in the `mainifest.json` file will still need to be updated manually.

To accompany the favicons we set a [`theme-color`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color) based upon the user's light/dark mode preference. This must be updated in: `public/index.html`, `public/index.ejs`, `public/index_static.ejs`.

## 🍃 Contensis Delivery API

When writing your own backing code that makes calls to the Delivery API, we strongly recommend using the exports available in `@zengenti/contensis-react-base/util` package.

Check the [documentation](https://gitlab.zengenti.com/starter-projects/react-starter/-/blob/master/docs/DELIVERY_API.md) in the /docs folder to read more about this

## 🚀 Git Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) structure for commit messages.

Example: `feat: header component`

## 📢 Releasing to live

When you are ready to release your code you can follow the steps provided in the [Releasing docs](https://chain-jewel-d93.notion.site/Releasing-161a0d0b10c249c39c48e8ee396991af) on Notion.
