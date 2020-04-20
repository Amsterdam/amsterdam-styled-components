import express from 'express'
import path from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import App from './App'

const app = express()

app.use(express.static(path.resolve(__dirname, '../lib')))

const sheet = new ServerStyleSheet()

app.get('/*', (req, res) => {
  try {
    const reactDom = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <App />
      </StyleSheetManager>,
    )
    const styleTags = sheet.getStyleTags()
    console.log(styleTags)

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
            ${styleTags}
        </head>
        
        <body>
            <div id="app">${reactDom}</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `)
  } catch (error) {
    // handle error
    console.error(error)
  }
})

// eslint-disable-next-line no-console
console.log('Listening to port 1337')
app.listen(1337)
