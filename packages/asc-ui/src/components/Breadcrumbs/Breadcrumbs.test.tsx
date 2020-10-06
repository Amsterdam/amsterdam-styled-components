import { render } from '@testing-library/react'
import React from 'react'
import Breadcrumbs from './Breadcrumbs'

describe('Breadcrumbs', () => {
  it('should render', () => {
    const { container } = render(<Breadcrumbs>Foo</Breadcrumbs>)
    expect(container.firstChild).toBeDefined()
  })
})
