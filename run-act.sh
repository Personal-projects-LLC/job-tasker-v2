#!/bin/bash

# Convert Windows path to Unix path
CURRENT_DIR=$(pwd -W 2>/dev/null || pwd)
DOCKER_SOCK="/var/run/docker.sock"

if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    DOCKER_SOCK="//var/run/docker.sock"
fi

# Build the act container if it doesn't exist
docker build -t act-runner -f Dockerfile.act .

# Run the container with the workflow
docker run --rm \
  --network host \
  -v "${CURRENT_DIR}:/repo" \
  -v "${DOCKER_SOCK}:/var/run/docker.sock" \
  -e SONAR_HOST_URL=http://host.docker.internal:9000 \
  -e SONAR_TOKEN=admin \
  act-runner \
  -W .github/workflows/test-local.yml \
  --secret SONAR_HOST_URL=http://host.docker.internal:9000 \
  --secret SONAR_TOKEN=admin \
  -v
