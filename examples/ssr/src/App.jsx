import React from 'react'
import { Button, Theme, ThemeProvider } from '@datapunt/asc-ui'
import Close from '@datapunt/asc-assets/Icons/Close.svg'

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
        <Button color={Theme.ColorType.primary}>
          <Close />Hello
        </Button>
      </>
    </ThemeProvider>
  )
}

export default App
