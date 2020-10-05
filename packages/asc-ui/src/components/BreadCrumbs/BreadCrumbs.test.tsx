import React from 'react'
import BreadCrumbs from './BreadCrumbs'

describe('BreadCrumbs', () => {
  it('should render', () => {
      const { container } = render(
        <BreadCrumbs>Foo</BreadCrumbs>,
      )
      expect(container.firstChild).toBeDefined()
    })
})

