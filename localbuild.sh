#!/bin/bash

# Load in env vars if they exist.
if [ ! -f .env* ]; then
  echo "No .env file found. Please create one."
  exit 1
fi

# Function to list all dot env files in the current directory.
listEnvFiles() {
  ls -a | grep .env | tr '\n' ',' | sed 's/,/, /g' | sed 's/,\s$//'
}

# Function to prompt the user for an env file.
getEnvFileInput() {
  if [ -z $envFile ] || [ ! -f $envFile ]; then
    read -p "Choose an env file [$(listEnvFiles)]: " envFile
  fi
}

# Prompt the user for an env file, until a valid response is given.
while [ -z $envFile ] || [ ! -f $envFile ]; do
  if [ ! -z $envFile ]; then
    echo "Env file not found, please try again."
  fi
  getEnvFileInput
done

# Load in the env file.
export $(cat $envFile | xargs)

docker build --force-rm -t $ALIAS-$PROJECT -f docker/nodebuilder.DockerFile .
docker build -t $ALIAS-$PROJECT-server --build-arg builder_image=$ALIAS-$PROJECT -f docker/ci-build.DockerFile .
