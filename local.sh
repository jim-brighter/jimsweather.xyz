#!/usr/bin/env bash

docker build --pull -f Dockerfile -t jimsweather.xyz:latest .
docker run -d --rm --name jimsweather.xyz -p 9001:80 -v "$PWD/ui":/usr/share/nginx/html/ jimsweather.xyz:latest

link="http://localhost:9001"

echo "Link: $link"

if [[ "$OSTYPE" =~ ^"darwin".*$ ]]; then
    open $link
else
    /mnt/c/Program\ Files/Google/Chrome/Application/chrome.exe "$link"
fi
