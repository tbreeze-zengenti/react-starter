ARG builder_image
FROM ${builder_image} as basebuilder
FROM node:18-alpine

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --production --loglevel error && \
  # Clears the npm cache to reduce image size
  npm cache clean --force

COPY --from=basebuilder /usr/src/app/dist /usr/src/app/dist
COPY .env* ./
COPY webpack/define-config.js ./webpack/
COPY ./manifest.json /manifest.json

# Start the server with launcher.js using docker environment variables. This is the preferred startup method when created via Blocks.
# If launcher.js cannot find an existing start script, it will generate one to start the server based on the supplied args
ENTRYPOINT node --max-http-header-size=800000 dist/server/launcher.js --alias=$alias --projectId=$projectId --accessToken=$accessToken

# Standard classic start script, will start the server with the environment started last 
# (or using configuration from the default .env if never started)
#ENTRYPOINT node dist/server/start.js

# Start the server using a project id and cms alias targeting the specific start script
#ENTRYPOINT node --max-http-header-size=800000 dist/server/start.$projectId.$alias.js

# Start the server configured for a given cms alias targeted to a specific project using env variable
#ENTRYPOINT npm --start=$projectId.$alias run-script server

EXPOSE 3001
