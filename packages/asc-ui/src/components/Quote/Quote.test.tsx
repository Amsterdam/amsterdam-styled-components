import { render } from '@testing-library/react'
import Quote from './Blockquote'

describe('Blockquote', () => {
  it('should render', () => {
    const { container } = render(<Quote>Foo</Quote>)
    expect(container.firstChild).toBeDefined()
  })
})
