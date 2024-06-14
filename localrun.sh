#!/bin/bash
# Load in env vars if they exist.
if [ ! -f .env* ]; then
  echo "No .env file found. Please create one."
  exit 1
fi

# Default values for env vars.
localPort=3001

# Check for command line flags.
# -n to use the default .env file.
# -e to specify a custom env file.
# -p to specify a custom local port.
while getopts ":e:n:p:" option; do
  case $option in
  e)
    envFile=$OPTARG
    ;;
  n)
    envFile=".env"
    ;;
  p)
    localPort=$OPTARG
    ;;
  esac
done

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

# Build & Run the app server using the env vars.
docker run -it --rm -p $localPort:3001 -e "alias=$ALIAS" -e "projectId=$PROJECT" $ALIAS-${PROJECT,,}-server
