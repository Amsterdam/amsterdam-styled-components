import * as React from 'react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import { render, cleanup, fireEvent } from '@testing-library/react'
import FooterToggle from './FooterToggle'
import 'jest-styled-components'

const theme = {
  ...ascDefaultTheme,
}

describe('FooterToggle', () => {
  afterEach(cleanup)
  it('should render and toggle the content', () => {
    const testProps = {
      title: 'title',
    }
    const { queryByTestId, getByText } = render(
      <ThemeProvider theme={theme}>
        <FooterToggle {...testProps}>
          <div data-testid="test-id">toggle content</div>
        </FooterToggle>
      </ThemeProvider>,
    )

    expect(queryByTestId('test-id')).not.toBeNull()
    const e = queryByTestId('test-id')
    expect(e && e.getAttribute('aria-hidden')).toBe('true')
    fireEvent.click(getByText(testProps.title))
    expect(e && e.getAttribute('aria-hidden')).toBe('false')
  })
})
