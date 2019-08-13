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
    color?: Theme.TypeLevel; // <-- theme typings!
}

styled.p`` // <-- theme typed styled component!

```

`styled` points to a re-exported version of `styled-components`, that could either be the react variant (default) or another one.

## Add a new theme

To add a new theme:

- add a new folder in src/theme/<new-theme-name>
- implement the interfaces defined in src/theme/index.ts
- export the them from the package (/src/index.ts)
- use it in your project as parameter of the ThemeProvider

```js
import { newThemeName, ThemeProvider } from '@datapunt/asc-core'

<ThemeProvider theme={newThemeName}>
  <App />
</ThemeProvider>
```
