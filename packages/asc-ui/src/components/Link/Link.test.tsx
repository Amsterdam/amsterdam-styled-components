import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Link from './Link'
import { ThemeProvider } from '../../theme'

describe('Link', () => {
  afterEach(cleanup)

  it('should render the links ', () => {
    const { getByText } = render(
      <ThemeProvider>
        <>
          <Link href="http://default-link">default link</Link>
          <Link href="http://with-chevron-link" variant="with-chevron">
            default link with chevron
          </Link>
          <Link href="http://inline-link" variant="inline">
            inline link
          </Link>
          <Link href="http://blank-link" variant="blank">
            blank link (no style)
          </Link>
        </>
      </ThemeProvider>,
    )

    const anchorDefault = getByText('default link').closest('a')
    expect(anchorDefault && anchorDefault.getAttribute('href')).toEqual(
      'http://default-link',
    )

    const anchorWithChevron = getByText(/with chevron/).closest('a')
    expect(anchorWithChevron && anchorWithChevron.getAttribute('href')).toEqual(
      'http://with-chevron-link',
    )

    const anchorInline = getByText('inline link').closest('a')
    expect(anchorInline && anchorInline.getAttribute('href')).toEqual(
      'http://inline-link',
    )

    const anchorBlank = getByText(/blank link/).closest('a')
    expect(anchorBlank && anchorBlank.getAttribute('href')).toEqual(
      'http://blank-link',
    )
  })
})
