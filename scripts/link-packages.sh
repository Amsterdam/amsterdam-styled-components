#!/usr/bin/env bash

current_path=`pwd`
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

cd "$parent_path"

PACKAGE_NAMES=()

for dir in ../packages/*/
do
    cd $dir
    npm link
    PACKAGE_NAME=$(cat package.json | grep name | head -1 | sed 's/\"name\"://g' | tr -d '"'  | tr -d ',')
    PACKAGE_NAMES+=($PACKAGE_NAME)
    cd ../
done

cd "$current_path"

for package_name in "${PACKAGE_NAMES[@]}"
do
    npm link $package_name
done
