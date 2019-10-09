import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';
import { GlobalStyle, ThemeProvider } from '@datapunt/asc-ui'
import { withA11y } from '@storybook/addon-a11y'

addDecorator(withInfo)
addDecorator(withA11y)

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /\.stories\.tsx$/)

const extendedTheme = {
  globalStyle: `
  `,
}

// Add global styles to every story and wrap the story in a div with a positive zIndex to prevent React Portals to get out of scope
function withGlobalStyles(storyFn) {
  return (
    <ThemeProvider overrides={extendedTheme}>
      <>
        <GlobalStyle />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {storyFn()}
        </div>
        
      </>
    </ThemeProvider>
  )
}

addDecorator(withGlobalStyles)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
