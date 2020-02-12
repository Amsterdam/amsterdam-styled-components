#!/usr/bin/env bash

# this file creates src/svg.ts and src/index.ts

current_path=`pwd`
cd "$current_path/src"

rm -f index.ts
for s in ./icons/*.tsx;do
    if [[ "$s" ]]
    then
        filename=${s##*/}
        echo "export { default as ${filename%.tsx} } from '${s%.tsx}'" >> index.ts;
    fi
done
