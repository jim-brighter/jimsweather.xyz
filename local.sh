#!/usr/bin/env bash
docker build --pull -f Dockerfile -t jimsweather.xyz:latest .
docker run -d --rm --name jimsweather.xyz -p 9001:80 -v "$PWD/ui":/usr/share/nginx/html/ jimsweather.xyz:latest

if [[ "$OSTYPE" =~ ^"darwin".*$ ]]; then
    open "http://localhost:9001"
else
    echo "Link: http://localhost:9001"
fi
