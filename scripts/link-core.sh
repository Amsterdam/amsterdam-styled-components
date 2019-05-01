#!/usr/bin/env bash

current_path=`pwd`

styles_dir="$current_path/packages/asc-ui/src/styles"
asc_core_dir="$current_path/packages/asc-core/src"

if [ -L "$styles_dir" ]
then
    unlink "$styles_dir"
fi

ln -s "$asc_core_dir" "$styles_dir"
