# `asc-core`

## Motivation

This package contains the re-exported version of `styled-components`, typed with the theme configuration.

We seperate this package from `asc-ui` to leave open the possibility of using other variants of styled-components (eg. styled-components-vue).
This way the styled components can be compiled framework / library agnostic, if we decide to support vue for example in the near future. Only the tsconfig in this project should point to the right file, something like index.vue.ts (instead of index.ts, which is react).

## Usage

Simply use the core library like this:

```bash
import styled, { Theme } from '@datapunt/asc-core'

export type Props = {
    color?: Theme.ColorType; // <-- theme typings!
}

styled.p`` // <-- theme typed styled component!

```

`styled` points to a re-exported version of `styled-components`, that could either be the react variant (default) or another one.

## Add a new theme

To add a new theme:

- add a new folder in `src/theme/<new-theme-name>`
- implement the interfaces defined in `src/theme/index.ts`
- use the themeName as parameter of the ThemeProvider

```js
import { ThemeProvider } from '@datapunt/asc-core'

<ThemeProvider themeName={`<new-theme-name>`}>
  <App />
</ThemeProvider>
```

## Override theme properties

To override some of the theme properties

- create a themeOverrides object with the properties that you want to overriede
- pass the themeOverrides object as parameter to the Theme provider
- the themeOverrides must match the Theme.ThemeInterface interface structure
- in the next example we override the `laptopM` breakpoint and redefine the primary and secondary colors

```js
import { ThemeProvider } from '@datapunt/asc-core'

const themeOverides = {
  breakpoints: {
    laptopM: () => '(min-width: 800.02px)',
  },
  colors: {
    primary: {
      main: '#00887a',
    },
    secondary: {
      main: 'green',
    },
  },
}


<ThemeProvider overrides={themeOverides}>
  <App />
</ThemeProvider>
```
