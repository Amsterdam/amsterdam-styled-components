import React from 'react'
import BreadCrumbsItem from './BreadCrumbsItem'

describe('BreadCrumbsItem', () => {
  it('should render', () => {
      const { container } = render(
        <BreadCrumbsItem>Foo</BreadCrumbsItem>,
      )
      expect(container.firstChild).toBeDefined()
    })
})

