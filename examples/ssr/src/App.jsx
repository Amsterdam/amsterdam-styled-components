import React from 'react'
import { Close } from '@datapunt/asc-assets'
import ThemeProvider from '@datapunt/asc-ui/lib/theme/ThemeProvider'
import Button from '@datapunt/asc-ui/lib/components/Button'

const App = () => (
  <ThemeProvider>
    <>
      <button
        type="button"
        onClick={() => {
          console.log('Hello from JS world!')
        }}
      >
        A normal html button with an onclick event, click me!
      </button>
      <Button variant="primary">
        <Close />
        Hello
      </Button>
    </>
  </ThemeProvider>
)

export default App
