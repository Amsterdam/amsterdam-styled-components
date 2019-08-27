#!/usr/bin/env bash

# this file creates src/svg.ts and src/index.ts

current_path=`pwd`
cd "$current_path/src"

rm -f svg.ts
for s in ./assets/Icons/*;do
    if [[ "$s" ]]
    then
        filename=${s##*/}
#        For some reason webpack cannot deal with export { default as .... with svg's
        echo "import ${filename%.svg} from '$s'
export { ${filename%.svg} }" >> svg.ts;
    fi
done

rm -f index.ts
echo "import * as svg from './svg'

export { svg }" >> index.ts
for s in ./Icons/*.tsx;do
    if [[ "$s" ]]
    then
        filename=${s##*/}
        echo "export { default as ${filename%.tsx} } from '${s%.tsx}'" >> index.ts;
    fi
done
