import { GlobalStyle, ThemeProvider } from '@datapunt/asc-ui'
import { addDecorator, addParameters } from '@storybook/react'
import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

function withGlobalStyles(storyFn) {
  return (
    <ThemeProvider>
      <>
        <GlobalStyle />
        {storyFn()}
      </>
    </ThemeProvider>
  )
}

addDecorator(withGlobalStyles)
addDecorator(withA11y)

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
