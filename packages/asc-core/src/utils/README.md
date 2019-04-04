Styles utility functions

### getThemeColor
...

### fillSVG
...

### fromProps
Gets value from the props object. Useful for styled-components

```js static
import styled from 'styled-components'
import { fromProps } from './utils/fromTheme'

const Div = styled.div`
  display: ${fromProps('display')};
`

<Div display="flex" /> // styles: { display: 'flex' }
```

### fromTheme
Same as `fromProps`, but it will get a value from the (global) theme object. Useful for styled-components

```js static
import styled from 'styled-components'
import fromTheme from './utils'

const theme = {
  colour: {
    brand: '#f00'
  },
  fontSizes: {
    title: 2
  },
  spacing: {
    max: 4
  }
}

const Div = styled.div`
  background-color: ${fromTheme('colour.white')};
  font-size: ${fromTheme('fontSizes.title')}em;
  padding: ${fromTheme('spacing.max', spacing => spacing * 2)}rem;
`

<Div theme={theme} /> // styles: { backgroundColor: '#f00', fontSize: '2em', padding: '8rem' }
```
