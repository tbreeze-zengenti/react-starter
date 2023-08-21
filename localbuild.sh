#!/bin/bash
docker build --force-rm -t zen-local-app -f docker/nodebuilder.DockerFile .
docker build -t zen-local-app-server --build-arg builder_image=zen-local-app -f docker/ci-build.DockerFile .

# -------- Uncomment below to build and run HA Proxy locally -------- #

##Build & Run HA Proxy

## docker build -t zen-app-test-haproxy -f docker/haproxy.DockerFile .

## Run Haproxy

##docker run -it -p 3002:3002 zen-app-test-haproxy
