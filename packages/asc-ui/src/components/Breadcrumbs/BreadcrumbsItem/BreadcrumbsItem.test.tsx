import { render } from '@testing-library/react'
import React from 'react'
import BreadcrumbsItem from './BreadcrumbsItem'

describe('BreadcrumbsItem', () => {
  it('should render', () => {
    const { container } = render(<BreadcrumbsItem>Foo</BreadcrumbsItem>)
    expect(container.firstChild).toBeDefined()
  })
})
