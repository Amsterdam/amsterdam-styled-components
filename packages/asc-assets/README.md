# asc-assets

This is a standalone package that contains:

- Fonts (including css font-face definitions)
- Icons (svg's and as react components)

## Install

Add this package to your project by running:

```bash
yarn add @datapunt/asc-assets # or npm install @datapunt/asc-assets --save
```

## Basic Usage

### Icons (React)

```jsx
import { IconName } from '@datapunt/asc-assets'

return <IconName />
```

### Fonts

Below an example of how to use with CopyWebpackPlugin:

```js
new CopyWebpackPlugin([
  {
    from: './node_modules/@datapunt/asc-assets/static/fonts',
    to: 'fonts',
  },
])
```

don't forget to include the css!

```scss
@import '~@datapunt/asc-assets/static/fonts/fonts.css';
```

## Optimized SVGs

```jsx
import IconName from '@datapunt/asc-assets/static/icons/IconName.svg'

return <img src={IconName} />
```

## Build Project

```bash
yarn build # generates JSX components using the optimized SVG icons
```
