#!/usr/bin/bash

rm -rf node_modules

# first install babel
npm install babel babel-core babel-preset-es2015 babel-preset-stage-1

# now can install the rest
npm install
