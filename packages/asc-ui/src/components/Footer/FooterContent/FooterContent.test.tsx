import * as React from 'react'
// import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import {
  render,
  cleanup,
  //  fireEvent
} from '@testing-library/react'
import FooterContent from './FooterContent'
import 'jest-styled-components'

describe('FooterContent', () => {
  afterEach(cleanup)

  it('should render with and without the indent', () => {
    const { queryByTestId, rerender } = render(
      <FooterContent data-testid="test-id">Footer content</FooterContent>,
    )

    expect(queryByTestId('test-id')).toHaveStyleRule('display', 'flex')
    expect(queryByTestId('test-id')).toHaveStyleRule('margin-left', '0')

    rerender(
      <FooterContent data-testid="test-id" indent>
        Footer content
      </FooterContent>,
    )

    expect(queryByTestId('test-id')).toHaveStyleRule('margin-left', '28px')
  })
})
