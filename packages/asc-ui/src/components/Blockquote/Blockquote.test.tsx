import { render } from '@testing-library/react'
import Blockquote from './Blockquote'

describe('Blockquote', () => {
  it('should render', () => {
    const { container } = render(<Blockquote>Foo</Blockquote>)
    expect(container.firstChild).toBeDefined()
  })
})
