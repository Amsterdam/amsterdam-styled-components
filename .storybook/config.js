import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { GlobalStyle, ThemeProvider, constants } from '@datapunt/asc-ui'
import { withA11y } from '@storybook/addon-a11y'

addDecorator(withInfo)
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

// Storybook scopes the stories in a div with a z-index of 0, this will break components that use React Portals
// This creates a new scope that is larger than the one of the React Portal
addDecorator(storyFn => (
  <div style={{ position: 'relative', zIndex: constants.BACKDROP_Z_INDEX + 1 }}>{storyFn()}</div>
))

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
