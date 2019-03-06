import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { GlobalStyle, ThemeProvider } from '@datapunt/asc-ui'
import { HeavyFontEot, HeavyFontWoff2 } from '@datapunt/asc-assets'

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /\.stories\.tsx$/)

const extendedTheme = {
  globalStyle: `
        @font-face {
          font-family: 'AvenirNextLTW01-Regular';
          src: url('${HeavyFontEot}');
          src: url('${HeavyFontEot}?#iefix') format('embedded-opentype'),
               url('${HeavyFontWoff2}') format('woff2')
        }
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
