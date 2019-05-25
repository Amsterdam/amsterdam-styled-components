import React, { Component } from 'react'
import { GlobalStyle, ThemeProvider, SearchBar } from '@datapunt/asc-ui'
import { HeavyFontEot, HeavyFontWoff2 } from '@datapunt/asc-assets'
import './App.css'

const action = console.log
class App extends Component {
  render() {
    const extendedTheme = {
      globalStyle: `
        @font-face {
          font-family: 'Avenir Next';
          font-weight: 700;
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
            Test search bar
            <SearchBar
              placeholder="Enter the search text"
              onTextChanged={(text: string) => {
      action(`text changed: ${text}`)
    }}
              onSearch={(text: string) => {
      action(`button clicked: ${text}`)
    }}
            />
          </div>
        </>
      </ThemeProvider>
    )
  }
}

export default App
