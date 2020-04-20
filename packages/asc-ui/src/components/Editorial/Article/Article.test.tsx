import React from 'react'
import Article from './Article'
import { renderWithTheme } from '../../../utils/withTheme'

describe('Article', () => {
  let component: any

  it('should render', () => {
    component = renderWithTheme(
      <Article>This is the publication content</Article>,
    )
    expect(component).toMatchSnapshot()
  })
})
