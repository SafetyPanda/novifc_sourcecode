#!/bin/bash

npm install
npm run build
nginx -s reload