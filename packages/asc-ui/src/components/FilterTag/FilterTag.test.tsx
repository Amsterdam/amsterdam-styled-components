import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import { cleanup, render } from '@testing-library/react'
import * as React from 'react'
import FilterTag from './FilterTag'

const theme = {
  ...ascDefaultTheme,
}

describe('FilterTag', () => {
  beforeEach(cleanup)
  it('should render and apply default style', () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <FilterTag>Verkeer en infrastructuur</FilterTag>
      </ThemeProvider>,
    )

    expect(queryByText(/Verkeer en infrastructuur/)).not.toBeNull()
  })
})
