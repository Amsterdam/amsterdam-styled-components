import { render } from '@testing-library/react'
import Quote from './Quote'

describe('Quote', () => {
  it('should render', () => {
    const { container } = render(<Quote>Foo</Quote>)
    expect(container.firstChild).toBeDefined()
  })
})
