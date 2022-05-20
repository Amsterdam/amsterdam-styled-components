# Amsterdam Styled Components UI

This is the React implementation of the styled-components

## Installation

Add this package to your project by running:

```bash
npm install @amsterdam/asc-ui
```

## Usage

Consult the [demo site with the storybook of the components](https://amsterdam.github.io/amsterdam-styled-components) to see the available components and examples

### Basic tweak of an existing style

```jsx
import styled from 'styled-components'
import { themeColor, List, breakpoint, styles, ThemeProvider } from '@amsterdam/asc-ui'

const StyledList = styled(List)`
  background-color: ${themeColor('tint', 'level5')};

  @media screen and ${breakpoint()} {
    background-color: ${themeColor('tint', 'level1')};
  }

  ${styles.ListItemStyle} {
    color: ${themeColor('primary')};
  }

  `

<ThemeProvider>
  <StyledList>
    <ListItem href="/">Item1</ListItem>
    <ListItem href="/">Item2</ListItem>
  </StyledList>
</ThemeProvider>

```

The background color of the StyledList component has the color of `tint.level5` widths smaller than `laptopM` breakpoint and `tint.level1` for widths larger than `laptopM`
The colors and the breakpoints are defined in the default theme

Each component exposes its style that can be used a (class)selector in another component. The naming convention for the styles is: `<component-name>` -> `styles.<component-name>Style`. For example ListItem has a styles.ListStyle selector.
We use the exposed selector to change the color of the LinkedListItems to the `primary` theme color. In this case we don't need to create a new StyledLinkedList item to override the style.
This is just the way we are exposing the styles from the asc library to be used as selectors. For extending the styles use the convention `const StyledLinkList = styled(LinkList)` as shown in the example.

The same can be achieved by creating of a new StyledLinkedListItem:

```jsx
import styled from 'styled-components'
import { themeColor, List, breakpoint, styles, ThemeProvider, svgFill } from '@amsterdam/asc-ui'

const StyledList = styled(List)`
  background-color: ${themeColor('tint', 'level5')};

  @media screen and ${breakpoint()} {
    background-color: ${themeColor('tint', 'level1')};
  }
`

const StyledListItem - styled(ListItem)`
  color: ${themeColor('primary')};

  ${styles.IconStyle} {
    ${svgFill(themeColor('tint', 'level1'))};
  }

  ${styles.LinkStyle} {

    &:hover {
      ${IconStyle} {
        ${svgFill(themeColor('primary', 'main'))};
      }
    }
  }

`

<ThemeProvider>
  <StyledList>
    <StyledListItem href="/">Item1</StyledListItem>
    <StyledListItem href="/">Item2</StyledListItem>
  </StyledList>
</ThemeProvider>

```

In this example, we use the IconStyle selector to override the color of the chevron icon from the ListItem
