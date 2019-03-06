import * as React from 'react'
import deepMerge from 'deepmerge'
import { Theme, THEME_NAME } from '../index'
import * as StyledComponents from '../../styled-components'
import colors from './colors'
import typography from './typography'
import globalStyle from './globalStyle'

interface Props {
  overrides?: Theme.DefaultThemeInterface
  children: any
}

const ASCDefaultThemeProvider = ({ overrides, children }: Props) => {
  const namespacedTheme = {
    [THEME_NAME]: deepMerge(
      Theme.CreateTheme.getTheme(colors, typography, globalStyle),
      overrides || {},
    ),
  }
  return (
    <StyledComponents.ThemeProvider theme={namespacedTheme}>
      {children}
    </StyledComponents.ThemeProvider>
  )
}

export default ASCDefaultThemeProvider
