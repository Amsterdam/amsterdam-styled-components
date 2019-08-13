import React, { Component } from 'react'
import { GlobalStyle, ThemeProvider, Button } from '@datapunt/asc-ui'
import { HeavyFontEot, HeavyFontWoff2, Alert } from '@datapunt/asc-assets'
import './App.css'

const action = console.log

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <>
          <GlobalStyle />
          <Button variant="primary" iconLeft={<Alert />}>
            Hello world!
          </Button>
        </>
      </ThemeProvider>
    )
  }
}

export default App
