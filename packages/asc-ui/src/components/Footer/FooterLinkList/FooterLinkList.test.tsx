import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import Link from '../../Link/Link'
import {
  FooterBottomLinkList,
  FooterLinkList,
  FooterLinkListItem,
  FooterBottomLinkListItem,
} from './index'
import { color } from '../../../utils'

const theme = {
  ...ascDefaultTheme,
}

describe('FooterLinkList', () => {
  afterEach(cleanup)
  it('should render a list with two items and apply the style', () => {
    const { queryByTestId, queryAllByText, getByText } = render(
      <ThemeProvider theme={theme}>
        <FooterLinkList data-testid="link-list-id">
          <FooterLinkListItem>
            <Link href="http://link1">Item1</Link>
          </FooterLinkListItem>
          <FooterLinkListItem>
            <Link href="http://link2">Item2</Link>
          </FooterLinkListItem>
        </FooterLinkList>
      </ThemeProvider>,
    )
    expect(queryByTestId('link-list-id')).toHaveStyleRule(
      'background-color',
      color('tint', 'level5')({ theme }),
    )
    expect(queryAllByText(/Item/)).toHaveLength(2)

    const anchor = getByText(/Item1/).closest('a')
    expect(anchor && anchor.getAttribute('href')).toEqual('http://link1')
  })
})

describe('FooterBottomLinkList', () => {
  afterEach(cleanup)
  it('should render', () => {
    const { queryByTestId, queryAllByText } = render(
      <ThemeProvider theme={theme}>
        <FooterBottomLinkList data-testid="link-list-id">
          <FooterBottomLinkListItem>
            <Link href="http://link1">Item1</Link>
          </FooterBottomLinkListItem>
          <FooterBottomLinkListItem>
            <Link href="http://link2">Item2</Link>
          </FooterBottomLinkListItem>
          <FooterBottomLinkListItem>
            <Link href="http://link3">Item3</Link>
          </FooterBottomLinkListItem>
        </FooterBottomLinkList>
      </ThemeProvider>,
    )
    expect(queryByTestId('link-list-id')).toHaveStyleRule(
      'background-color',
      color('tint', 'level1')({ theme }),
    )
    expect(queryAllByText(/Item/)).toHaveLength(3)
  })
})
