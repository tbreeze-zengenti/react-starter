FROM node:20 as builder
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install -g npm@^9.8.1
RUN npm install -g mocha
RUN npm install --legacy-peer-deps --loglevel error
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
RUN npm run build:ci
RUN mocha --timeout=5000 dist/server/start.js -tests
COPY version.json /usr/src/app/dist/static/version.json
RUN cat /usr/src/app/dist/static/version.json
