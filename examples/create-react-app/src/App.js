import React, { Component } from 'react'
import { Button, GlobalStyle, ThemeProvider } from '@datapunt/asc-ui'
import { ReactComponent as BackWhite } from '@datapunt/asc-assets/Icons/back-white.svg'
import { HeavyFontEot, HeavyFontWoff2 } from '@datapunt/asc-assets'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
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
    return (
      <ThemeProvider theme={extendedTheme}>
        <>
          <GlobalStyle />
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <BackWhite />
              <Button color="secondary">Hello!</Button>
            </header>
          </div>
        </>
      </ThemeProvider>
    )
  }
}

export default App
