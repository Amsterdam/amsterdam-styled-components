import React from 'react'
import { render } from '@testing-library/react'
import { Location } from '@datapunt/asc-assets'

import Icon from './Icon'

describe('Icon', () => {
  it('should render the location icon', () => {
    const { container } = render(
      <Icon inline size={24} padding={4} color="red">
        <Location />
      </Icon>,
    )
    expect(container.firstChild).toBeDefined()
  })
})
