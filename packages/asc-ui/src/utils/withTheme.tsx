import * as React from 'react'
import { shallow, render, mount } from 'enzyme'
import { ThemeProvider } from '../index'

export const renderWithTheme = (component: JSX.Element) =>
  render(<ThemeProvider>{component}</ThemeProvider>)

export const shallowWithTheme = (component: JSX.Element) =>
  shallow(<ThemeProvider>{component}</ThemeProvider>)

export const mountWithTheme = (component: JSX.Element) =>
  mount(<ThemeProvider>{component}</ThemeProvider>)
