import React from 'react'
import './App.css'
import { ThemeProvider, GlobalStyle, SearchBar } from '@datapunt/asc-ui'

const action = console.log

const App = () => {
  return (
    <ThemeProvider>
      <>
        <GlobalStyle />
        <div className="App">
          Test search bar
          <SearchBar
            placeholder="Enter the search text"
            onTextChanged={text => {
              action(`text changed: ${text}`)
            }}
            onSearch={text => {
              action(`button clicked: ${text}`)
            }}
          />
        </div>
      </>
    </ThemeProvider>
  )
}

export default App
