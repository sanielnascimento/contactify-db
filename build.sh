#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn run /node_modules/typescript/bin/tsc
yarn typeorm migration:run -d dist/data-source