# asc-assets

This is a standalone package that contains:

- Fonts (including CSS `font-face` definitions)
- Icons (SVGs as React components)

## Install

Add this package to your project by running:

```bash
npm install @amsterdam/asc-assets
```

## Basic Usage

### Icons

```jsx
import { IconName } from '@amsterdam/asc-assets'

return <IconName />
```

### Fonts

There are currently two ways of including the fonts used in your application, you can either copy them in from this package in your build or include a version from the Amsterdam CDN. Note that if you want to use the version hosted by Amsterdam you must have an application that runs in the `amsterdam.nl` domain space.

#### Using the Amsterdam CDN

Add the following code to your `index.html` file:

```html
<link href="https://static.amsterdam.nl/fonts/fonts.css" rel="stylesheet" />
```

There is nothing more to do, the fonts should now be available in your application.

#### Copying the files at build time

This step assumes that you are using WebPack, but it should be possible to do this with other tools or a simple shell script as well.

Add the following code to your WebPack configuration:

```js
new CopyWebpackPlugin({
  patterns: [
    {
      from: './node_modules/@amsterdam/asc-assets/static/fonts',
      to: 'fonts',
    },
  ],
})
```

And make sure to import the CSS file in your stylesheet:

```scss
@import '~@amsterdam/asc-assets/static/fonts/fonts.css';
```

## Build Project

```bash
npm run build # generates JSX components using the optimized SVG icons
```
