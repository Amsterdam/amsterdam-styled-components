import { GlobalStyle, ThemeProvider } from '@datapunt/asc-ui'
import { addDecorator, addParameters } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { withA11y } from '@storybook/addon-a11y'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import sortStories from './util/sort-stories'

const SORT_ORDER = {
  Introduction: ['Welcome', 'Getting Started', 'Contributing'],
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
addDecorator(withA11y)

addParameters({
  options: {
    storySort: sortStories(SORT_ORDER),
    showRoots: true,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})
