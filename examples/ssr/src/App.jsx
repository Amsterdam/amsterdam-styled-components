import React from 'react'
import { Button, Theme, ThemeProvider } from '@amsterdam/asc-ui'
import SVG from '@amsterdam/asc-assets/Icons/back-white.svg'

const App = () => {
  return (
    <ThemeProvider>
      <>
        <button
          type="button"
          onClick={() => {
            console.log('Hello from JS world!')
          }}
        >
          An html button with an onclick event, click me!
        </button>
        <Button color={Theme.TypeLevel.primary}>
          <SVG />Hello
        </Button>
      </>
    </ThemeProvider>
  )
}

export default App
