import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { FooterHeading, ToggleFooterHeader } from '../index'
import { themeColor } from '../../../utils'
import { ThemeProvider, ascDefaultTheme } from '../../../theme'

describe('FooterHeading', () => {
  afterEach(cleanup)

  it('should render the heading', () => {
    const { queryByTestId, queryByText } = render(
      <ThemeProvider>
        <FooterHeading data-testid="test-id">Footer heading</FooterHeading>
      </ThemeProvider>,
    )

    expect(queryByTestId('test-id')).toHaveStyleRule('display', 'flex')
    expect(queryByTestId('test-id')).toHaveStyleRule('margin-top', '0')
    expect(queryByTestId('test-id')).toHaveStyleRule('margin-bottom', '8px')
    expect(queryByTestId('test-id')).toHaveStyleRule(
      'color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )
    expect(queryByText('Footer heading')).not.toBeNull()
  })
})

describe('ToggleFooterHeader', () => {
  afterEach(cleanup)
  it('should react on click', () => {
    const testProps = {
      open: false,
      onClick: jest.fn(),
      title: 'toggle header title',
    }

    const { queryByText, getByText } = render(
      <ThemeProvider>
        <ToggleFooterHeader {...testProps} />
      </ThemeProvider>,
    )
    expect(queryByText(testProps.title)).not.toBeNull()

    fireEvent.click(getByText(testProps.title))

    expect(testProps.onClick).toHaveBeenCalledTimes(1)
  })
})
