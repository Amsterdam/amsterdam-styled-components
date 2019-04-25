import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { GlobalStyle, ThemeProvider } from '@datapunt/asc-ui'
import { withA11y } from '@storybook/addon-a11y'

addDecorator(withA11y)

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /\.stories\.tsx$/)

const extendedTheme = {
  globalStyle: `
    @font-face {
      font-family: "AvenirNextLTW01-Regular";
      src: url("Fonts/AvenirNextLTPro-Regular.eot");
      /* IE9 Compat Modes */
      src: url("Fonts/AvenirNextLTPro-Regular.eot?#iefix") format("embedded-opentype"),
        /* IE6-IE8 */
        url("Fonts/AvenirNextLTPro-Regular.otf") format("opentype"),
        /* Open Type Font */
        url("Fonts/AvenirNextLTPro-Regular.svg") format("svg"),
        /* Legacy iOS */
        url("Fonts/AvenirNextLTPro-Regular.ttf") format("truetype"),
        /* Safari, Android, iOS */
        url("Fonts/AvenirNextLTPro-Regular.woff") format("woff"),
        /* Modern Browsers */
        url("Fonts/AvenirNextLTPro-Regular.woff2") format("woff2");
      /* Modern Browsers */
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "AvenirNextLTW01-Italic";
      src: url("Fonts/AvenirNextLTPro-It.eot");
      /* IE9 Compat Modes */
      src: url("Fonts/AvenirNextLTPro-It.eot?#iefix") format("embedded-opentype"),
        /* IE6-IE8 */
        url("Fonts/AvenirNextLTPro-It.otf") format("opentype"),
        /* Open Type Font */
        url("Fonts/AvenirNextLTPro-It.svg") format("svg"),
        /* Legacy iOS */
        url("Fonts/AvenirNextLTPro-It.ttf") format("truetype"),
        /* Safari, Android, iOS */
        url("Fonts/AvenirNextLTPro-It.woff") format("woff"),
        /* Modern Browsers */
        url("Fonts/AvenirNextLTPro-It.woff2") format("woff2");
      /* Modern Browsers */
      font-weight: normal;
      font-style: normal;
    }
    
    @font-face {
      font-family: "AvenirNextLTW01-Demi";
      src: url("Fonts/AvenirNextLTPro-Demi.eot");
      /* IE9 Compat Modes */
      src: url("Fonts/AvenirNextLTPro-Demi.eot?#iefix") format("embedded-opentype"),
        /* IE6-IE8 */
        url("Fonts/AvenirNextLTPro-Demi.otf") format("opentype"),
        /* Open Type Font */
        url("Fonts/AvenirNextLTPro-Demi.svg") format("svg"),
        /* Legacy iOS */
        url("Fonts/AvenirNextLTPro-Demi.ttf") format("truetype"),
        /* Safari, Android, iOS */
        url("Fonts/AvenirNextLTPro-Demi.woff") format("woff"),
        /* Modern Browsers */
        url("Fonts/AvenirNextLTPro-Demi.woff2") format("woff2");
      /* Modern Browsers */
      font-weight: normal;
      font-style: normal;
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
