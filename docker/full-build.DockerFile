FROM node:16 as builder
# The following prevents errors when cwebp is installing.
RUN apt-get update
RUN apt-get install libglu1 -y
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install -g npm
RUN npm install -g mocha
RUN npm install --legacy-peer-deps --loglevel error
COPY config /usr/src/app/config
COPY public /usr/src/app/public

COPY src /usr/src/app/src
COPY webpack /usr/src/app/webpack
COPY babel.config.js .
COPY .env* ./
COPY .eslintignore .
COPY .eslintrc.js .
COPY .nvmrc .
COPY .prettierignore .
COPY .prettierrc .
COPY tsconfig.json .
RUN npm run build
RUN mocha --timeout=5000 dist/server/start.js -tests
COPY version.json /usr/src/app/dist/static/version.json
RUN cat /usr/src/app/dist/static/version.json

FROM mhart/alpine-node:16

WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
COPY .env* ./
COPY webpack/define-config.js ./webpack/
RUN npm install --production --loglevel error
COPY --from=builder /usr/src/app/dist /usr/src/app/dist

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
