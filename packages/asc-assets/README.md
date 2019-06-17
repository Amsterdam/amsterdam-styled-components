
## Install

```bash
yarn add @datapunt/asc-assets # or npm install @datapunt/asc-assets --save
```

## Basic Usage

```ts
import { IconName } from '@datapunt/asc-assets';

return (
  <IconName />
)
```

## Optimized SVGs

```ts
import IconName from '@datapunt/asc-assets/lib/Icons/IconName.svg';

return (
  <img src={IconName} />
)
```

## Build Project
```bash
yarn build # generates JSX components using the optimized SVG icons
```
