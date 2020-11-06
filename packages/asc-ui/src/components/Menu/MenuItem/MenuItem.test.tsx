import { render } from '@testing-library/react'
import MenuItem from './MenuItem'

describe('MenuItem', () => {
  it('should render', () => {
    const { container } = render(<MenuItem>foo</MenuItem>)
    expect(container.firstChild).toBeDefined()
  })
})
