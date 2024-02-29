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

# Seperating the copy of the package.json ensures the dockerbuild will cache the node_modules if the package.json has not changed
# When we auto increment the version, we should remove that as part of the copy to ensure the cache is maintained. i.e strip the version number before copying the file.
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps --loglevel error
COPY .storybook /usr/src/app/.storybook
COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY webpack /usr/src/app/webpack
COPY babel.config.js .env .eslintignore .nvmrc .prettierignore .prettierrc ./

RUN npm run storybook-static
