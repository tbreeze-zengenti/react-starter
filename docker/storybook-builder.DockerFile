FROM node:18-alpine as builder
WORKDIR /usr/src/app

RUN apk add --no-cache \
  autoconf \
  automake \
  bash \
  g++ \
  libc6-compat \
  libjpeg-turbo-dev \
  libpng-dev \
  make \
  nasm

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps --loglevel error
COPY .storybook /usr/src/app/.storybook
COPY config /usr/src/app/config
COPY public   /usr/src/app/public
COPY src /usr/src/app/src
COPY webpack /usr/src/app/webpack
COPY babel.config.js .env .eslintignore .nvmrc .prettierignore .prettierrc ./

RUN npm run storybook-static
