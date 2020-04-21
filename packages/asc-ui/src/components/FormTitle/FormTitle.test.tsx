import * as React from 'react'
import { render } from '@testing-library/react'
import FormTitle from './FormTitle'

describe('FormTitle', () => {
  it('should render', () => {
    const { container, queryByText } = render(<FormTitle>Foo</FormTitle>)

    expect(container).toBeInTheDocument()
    expect(queryByText('Foo')).toBeInTheDocument()
  })
  it('should match the style of the design system', () => {
    const { container } = render(<FormTitle>Foo</FormTitle>)

    expect(container.firstChild).toHaveStyleRule('max-width', '620px')
    expect(container.firstChild).toHaveStyleRule('font-size', '14px')
    expect(container.firstChild).toHaveStyleRule('line-height', '18px')
    expect(container.firstChild).toHaveStyleRule('font-weight', '700')
  })
})
