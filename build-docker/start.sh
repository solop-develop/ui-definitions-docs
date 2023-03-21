#!/bin/sh

# folder with dist app files
cd /usr/share/nginx/html/static/js

# Set Vue host client
find -name 'index.html.*.js' -exec sed -i "s|http://localhost:9526|$VUE_HOST|g" {} \;

# Set ZK host client
find -name 'index.html.*.js' -exec sed -i "s|http://localhost:8888|$ZK_HOST|g" {} \;

# Start nginx web server
nginx && tail -f /dev/null
