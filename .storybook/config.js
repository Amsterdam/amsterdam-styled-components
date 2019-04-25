import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { GlobalStyle, ThemeProvider } from '@datapunt/asc-ui'
import { withA11y } from '@storybook/addon-a11y'

addDecorator(withA11y)

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /\.stories\.tsx$/)

const extendedTheme = {
  globalStyle: `
  `,
}

function withGlobalStyles(storyFn) {
  return (
    <ThemeProvider overrides={extendedTheme}>
      <>
        <GlobalStyle />
        {storyFn()}
      </>
    </ThemeProvider>
  )
}

addDecorator(withGlobalStyles)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
