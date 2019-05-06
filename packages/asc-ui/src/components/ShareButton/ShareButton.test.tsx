import * as React from 'react'
import ShareButton from './ShareButton'
import { renderWithTheme } from '../../utils/withTheme'
import 'jest-styled-components'

describe('ShareButton', () => {
  it('should render the share button', () => {
    const component = renderWithTheme(<ShareButton>Hello</ShareButton>)

    expect(component).toMatchSnapshot()
  })
})
