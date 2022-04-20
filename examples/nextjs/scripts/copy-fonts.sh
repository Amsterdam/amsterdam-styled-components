#!/usr/bin/env bash

cp -R ./node_modules/@amsterdam/asc-assets/static/fonts/ ./public/fonts
sed -i -e 's/.\/AvenirAll/\/fonts\/AvenirAll/g' public/fonts/fonts.css
