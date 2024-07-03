FROM node:20 as builder
# The following prevents errors when cwebp is installing.
RUN apt-get update
RUN apt-get install libglu1 -y
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install -g npm@^9.8.1
COPY contensis-forms-0.0.1.tgz .
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
RUN npm run build:ci
RUN mocha --timeout=5000 dist/server/start.js -tests
COPY version.json /usr/src/app/dist/static/version.json
RUN cat /usr/src/app/dist/static/version.json
