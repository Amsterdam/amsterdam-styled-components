import React from 'react'
import Hidden from './Hidden'
import Readme from './README.md'

export default {
  title: 'Headless/Hidden',
  parameters: {
    notes: Readme,
  },
}

export const WithMinBreakpoint = () => (
  <Hidden minBreakpoint="tabletM">I am hidden from tabletM</Hidden>
)

export const WithMaxBreakpoint = () => (
  <Hidden maxBreakpoint="tabletM">I am hidden until tabletM</Hidden>
)

export const WithMinAndMaxBreakpoints = () => (
  <Hidden minBreakpoint="mobileS" maxBreakpoint="laptop">
    I am hidden only between mobileS and laptop
  </Hidden>
)

export const WithACustomQuery = () => (
  <Hidden query="(min-width: 300px) and (max-width: 600px)">
    I am hidden only between 300px and 600px
  </Hidden>
)
