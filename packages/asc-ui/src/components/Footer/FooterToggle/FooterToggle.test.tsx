import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import FooterToggle from './FooterToggle'
import { ThemeProvider } from '../../../theme'

describe('FooterToggle', () => {
  afterEach(cleanup)
  it('should render and toggle the content', () => {
    const testProps = {
      title: 'title',
    }
    const { queryByTestId, getByText } = render(
      <ThemeProvider>
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
