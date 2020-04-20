import React from 'react'
import { renderWithTheme } from '../../utils/withTheme'
import Icon from './Icon'

describe('Icon', () => {
  it('should render the icon', () => {
    const component = renderWithTheme(
      <Icon inline size={24} padding={4}>
        icon-content
      </Icon>,
    )
    expect(component).toMatchSnapshot()
  })
})
