import * as React from 'react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { FooterHeading, ToggleFooterHeader } from '../index'
import { color } from '../../../utils'

const theme = {
  ...ascDefaultTheme,
}

describe('FooterHeading', () => {
  afterEach(cleanup)

  it('should render the heading', () => {
    const { queryByTestId, queryByText } = render(
      <ThemeProvider theme={theme}>
        <FooterHeading data-testid="test-id">Footer heading</FooterHeading>
      </ThemeProvider>,
    )

    expect(queryByTestId('test-id')).toHaveStyleRule('display', 'flex')
    expect(queryByTestId('test-id')).toHaveStyleRule('margin-top', '0')
    expect(queryByTestId('test-id')).toHaveStyleRule('margin-bottom', '8px')
    expect(queryByTestId('test-id')).toHaveStyleRule(
      'color',
      color('tint', 'level1')({ theme }),
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
      <ThemeProvider theme={theme}>
        <ToggleFooterHeader {...testProps} />
      </ThemeProvider>,
    )
    expect(queryByText(testProps.title)).not.toBeNull()

    fireEvent.click(getByText(testProps.title))

    expect(testProps.onClick).toHaveBeenCalledTimes(1)
  })
})
