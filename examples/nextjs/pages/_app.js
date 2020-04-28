import App from 'next/app'
import React from 'react'
import { ThemeProvider, GlobalStyle } from '@datapunt/asc-ui'
import '../public/fonts/fonts.css'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
