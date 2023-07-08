#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn tsc
yarn typeorm migration:run -d dist/data-source