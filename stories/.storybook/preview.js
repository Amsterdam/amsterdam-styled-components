import { GlobalStyle, ThemeProvider } from '@amsterdam/asc-ui'
import { DocsContainer, DocsPage } from '@storybook/addon-docs'
import { addDecorator, addParameters } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import sortStories from './util/sort-stories'

const SORT_ORDER = {
  Introduction: ['Welcome', 'Getting Started', 'Contributing', 'Changelog'],
  UI: [],
  Headless: [],
  Utils: [],
}

const StoryWrapper = styled.div`
  position: relative;
  padding: 1rem;
`

function withGlobalStyles(storyFn) {
  return (
    <ThemeProvider>
      <>
        <GlobalStyle />
        <StoryWrapper>{storyFn()}</StoryWrapper>
      </>
    </ThemeProvider>
  )
}

addDecorator(withGlobalStyles)

addParameters({
  options: {
    storySort: sortStories(SORT_ORDER),
  },
  a11y: {},
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})
