#!/usr/bin/env bash

if [ -L $(pwd)/packages/asc-ui/src/styles ]
then
    unlink $(pwd)/packages/asc-ui/src/styles
fi

ln -s $(pwd)/packages/asc-core/src $(pwd)/packages/asc-ui/src/styles
