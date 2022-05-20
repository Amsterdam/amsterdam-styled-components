import {
    breakpoint, GlobalStyle,


    Link, List,
    ListItem,


    styles,


    svgFill, themeColor, ThemeProvider,




    Typography
} from '@amsterdam/asc-ui'
import React from 'react'
import styled from 'styled-components'

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

const StyledLinkList = styled(List)`
  padding: 50px;
  background-color: ${themeColor('tint', 'level2')};

  @media screen and ${breakpoint()} {
    background-color: ${themeColor('tint', 'level4')};
  }

  ${styles.LinkListItemStyle} > a {
    color: ${themeColor('primary')};
  }

  &.link-list {
    background-color: ${themeColor('tint', 'level3')};
  }
`

const StyledLinkListItem = styled(ListItem)`
  & > a {
    color: ${themeColor('primary')};
  }

  ${styles.IconStyle} {
    ${svgFill(themeColor('primary', 'main'))};
  }
`

const App = () => (
  <ThemeProvider overrides={themeOverides}>
    <>
      <GlobalStyle />
      <div className="App">
        <Typography>Link list default example</Typography>
        <List>
          <ListItem>
            <Link href="/" inList>
              default LinkListItem 1
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/" inList>
              default LinkListItem 2
            </Link>
          </ListItem>
        </List>
        <StyledLinkList>
          <ListItem>
            <Link href="/" inList>
              StyledLinkList LinkListItem 1
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/" inList>
              StyledLinkList LinkListItem 2
            </Link>
          </ListItem>
        </StyledLinkList>
        <StyledLinkList className="link-list">
          <StyledLinkListItem>
            <Link href="/" inList>
              StyledLinkList StyledLinkListItem 1
            </Link>
          </StyledLinkListItem>
          <StyledLinkListItem>
            <Link href="/" inList>
              StyledLinkList StyledLinkListItem 2
            </Link>
          </StyledLinkListItem>
        </StyledLinkList>
      </div>
    </>
  </ThemeProvider>
)

export default App
