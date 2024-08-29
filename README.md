![Zengenti React Start](/readme.png)

Commonly know as React Starter, this is our starter project for most client builds. It's powered by the latest version of Contensis React Base (currently v3).

For detailed documentation on our React packages, please visit our [documentation website](https://react-starter.com/).

## 🔌 Getting started

1. **Configure CMS Environment**: Define your CMS environment in the .env file
2. **Update Project Details**: Set the project name and repository URL in package.json
3. **Install Dependencies**: Run npm install to install the required packages\*
4. **Start the Project**: Run npm start to launch the project in your browser

Ensure you're running Node.js version 20 before installation. We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage multiple versions of Node.js.

\* If you encounter any installation issues you should remove your `/node_modules` folder and run `npm install --legacy-peer-deps`.

## 📜 Key scripts

- `npm install`: Install all project dependencies
- `npm start`: Start the application in development mode
- `npm run storybook`: Launch Storybook in development mode
- `npm run build:server`: Build and run the server-side application from source, enabling server-side debugging

## 🌎 Environments

To connect to your CMS environment you will need to update the `.env` file in the root directory. By default, the provided .env connects the project to our Leif Demo CMS, driving example pages in the app.

You can create additional environment files for different CMS configurations by appending a suffix (e.g., .env.development). To use a specific environment file during start/build, reference the suffix in the script like so: `npm --env={suffix} run-script start`.

## 🍃 Contensis Delivery API

When writing your own backing code that makes calls to the Delivery API, we strongly recommend using the exports available in `@zengenti/contensis-react-base/util` package.

Refer to [DELIVERY_API.md](https://gitlab.zengenti.com/starter-projects/react-starter/-/blob/master/DELIVERY_API.md) for more detailed documentation on this topic.

## 🐋 Local Docker Testing

To test your application locally using Docker, we provide two utility scripts to streamline the process. The `localbuild.sh` and `localrun.sh` scripts will build and run your application within a Docker container, offering an accurate representation of how it will function when deployed.

## 📚 Storybook

This project includes Storybook for isolated component development. To create stories, add a `componentName.stories.tsx` file in the component's folder and run `npm run storybook` to preview them.

### Deploying Storybook to Blocks

You can deploy Storybook to Blocks for external access.

#### Configuration

By default, Storybook deployment to Blocks is triggered manually via the GitLab pipeline interface. To automate this process, remove the `when: manual` parameter from the `build-storybook` and `push-storybook-block` stages in `.gitlab-ci.yml`.

#### Blocks Setup

To preview Storybook on a Block:

1. Remove `when: manual` from both the `build-storybook` and `push-storybook-block` stages in `.gitlab-ci.yml`
2. Commit and push your changes. Once the GitLab CI passes, a new Block will appear in your environment, named after the`block_id` parameter ("storybook" by default)
3. Create a Siteview Node for Storybook, typically at `/storybook`
4. Assign the appropriate Renderer to the new Siteview Node, which is named after the `block_id`

## 📢 Releasing

Releases are managed through the Blocks interface within your Contensis environment.
