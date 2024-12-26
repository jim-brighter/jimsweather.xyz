#!/usr/bin/env bash

docker compose build --pull
docker compose up -d

link="http://localhost:9001"

echo "Link: $link"

if [[ "$OSTYPE" =~ ^"darwin".*$ ]]; then
    open $link
else
    /mnt/c/Program\ Files/Google/Chrome/Application/chrome.exe "$link"
fi
