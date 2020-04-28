#!/usr/bin/env bash

cp -R ./node_modules/@datapunt/asc-assets/static/fonts/ ./public/fonts
sed -i -e 's/.\/AvenirAll/\/fonts\/AvenirAll/g' public/fonts/fonts.css
rm public/fonts/fonts.css-e
