import React, { Component } from 'react'
import './App.css'

const action = console.log
class App extends Component {
  render() {
    return (
      <ThemeProvider>
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
