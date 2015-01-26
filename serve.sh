#!/bin/bash

echo "Starting to serve from: $1"
#cd $1
export JEKYLL_GITHUB_TOKEN="47ffa034ce0d4fcdd4464fe210f63cb36882c971"

cd /mnt/safe/github-pages-project/theme/dev
guard --no-bundler-warning

#JEKYLL_SCREEN=`screen -S jekyll-serve-dev -dm `
#jekyll serve --watch --trace --config /mnt/safe/github-pages-project/theme/dev/_config.yml --source /mnt/safe/github-pages-project/theme/dev
