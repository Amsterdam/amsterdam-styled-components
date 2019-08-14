import React from 'react'
import './App.css'
import styled from '@datapunt/asc-core'
import {
  ThemeProvider,
  GlobalStyle,
  List,
  ListItem,
  Typography,
  styles,
  color,
  breakpoint,
  svgFill,
} from '@datapunt/asc-ui'

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
  background-color: ${color('tint', 'level2')};

  @media screen and ${breakpoint('min-width', 'laptopM')} {
    background-color: ${color('tint', 'level4')};
  }

  ${styles.LinkListItemStyle} > a {
    color: ${color('primary')};
  }

  &.link-list {
    background-color: ${color('tint', 'level3')};
  }
`

const StyledLinkListItem = styled(ListItem)`
  & > a {
    color: ${color('primary')};
  }

  ${styles.IconStyle} {
    ${svgFill('primary')};
  }
`

const App = () => {
  return (
    <ThemeProvider overrides={themeOverides}>
      <>
        <GlobalStyle />
        <div className="App">
          <Typography>Link list deafaultexample</Typography>
          <Typography $as="p" className="App-link-list-container">
            <List>
              <ListItem href="/">default LinkListItem 1</ListItem>
              <ListItem href="/">default LinkListItem 2</ListItem>
            </List>
          </Typography>
          <Typography $as="p" className="App-link-list-container">
            <StyledLinkList>
              <ListItem href="/">StyledLinkList LinkListItem 1</ListItem>
              <ListItem href="/">StyledLinkList LinkListItem 2</ListItem>
            </StyledLinkList>
          </Typography>
          <Typography $as="p" className="App-link-list-container">
            <StyledLinkList className="link-list">
              <StyledLinkListItem href="/">
                StyledLinkList StyledLinkListItem 1
              </StyledLinkListItem>
              <StyledLinkListItem href="/">
                StyledLinkList StyledLinkListItem 2
              </StyledLinkListItem>
            </StyledLinkList>
          </Typography>
        </div>
      </>
    </ThemeProvider>
  )
}

export default App
