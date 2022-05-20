# Styles utility functions

## fromProps

Gets value from the props object. Useful for styled-components

```js static
import styled from 'styled-components'
import { fromProps } from './utils'

const Div = styled.div`
  display: ${fromProps('display')};
`
return (
  <Div display="flex" /> // styles: { display: 'flex' }
)
```

## fromTheme

Same as `fromProps`, but it will get a value from the (global) theme object. Useful for styled-components

```js static
import styled from 'styled-components'
import fromTheme from './utils'

const theme = {
  colour: {
    brand: '#f00',
  },
  fontSizes: {
    title: 2,
  },
  spacing: {
    max: 4,
  },
}

const DivStyle = styled.div`
  background-color: ${fromTheme('colour.white')};
  font-size: ${fromTheme('fontSizes.title')}em;
  padding: ${fromTheme('spacing.max', (spacing) => spacing * 2)}rem;
`
return (
  <DivStyle theme={theme} /> // styles: { backgroundColor: '#f00', fontSize: '2em', padding: '8rem' }
)
```

## color

Extends `fromTheme`, but it's specified to the theme colors. Will return a default value if no colors are specified

```js static
import styled from 'styled-components'
import { themeColor } from './utils'

const theme = {
  colors: {
    primary: {
      dark: '#000',
      light: '#fff',
    },
    light: '#fff',
  },
}

const ButtonStyle = styled.button`
  background-color: ${themeColor('primary', 'dark')};
  color: ${themeColor('light')};
`

return (
  <ButtonStyle theme={theme} /> // styles: { backgroundColor: '#000', color: '#fff' }
)
```

## breakpoint

Extenstion of fromTheme to retrieve the media query breakpoints as specified for the current theme.

```js static
const HeaderSearchStyle = styled.div`
  @media screen and ${breakpoint('max-width')} {
    width: 50px;
  }
`
return <HeaderSearchStyle theme={theme} />
```
