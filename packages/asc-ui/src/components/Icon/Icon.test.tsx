import React from 'react'
import { render } from '@testing-library/react'
import Icon from './Icon'

describe('Icon', () => {
  it('should render the icon', () => {
    const { container } = render(
      <Icon inline size={24} padding={4}>
        icon-content
      </Icon>,
    )
    expect(container.firstChild).toBeDefined()
  })
})
