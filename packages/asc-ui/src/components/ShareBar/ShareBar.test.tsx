import * as React from 'react'
import { renderWithTheme } from '../../utils/withTheme'
import ShareBar from './ShareBar'
import 'jest-styled-components'
import ShareButton from '../ShareButton'

describe('ShareBar', () => {
  it('should render the share bar', () => {
    const component = renderWithTheme(
      <ShareBar>
        <ShareButton>One</ShareButton>
        <ShareButton>Two</ShareButton>
      </ShareBar>,
    )
    expect(component).toMatchSnapshot()
  })
})
