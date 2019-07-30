import * as React from 'react'
import Link from './Link'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

describe('Link', () => {
  it('should render', () => {
    const component = renderWithTheme(
      <Link href="/" linkType="inline">
        Foo
      </Link>,
    )

    expect(component).toMatchSnapshot()
  })
})
