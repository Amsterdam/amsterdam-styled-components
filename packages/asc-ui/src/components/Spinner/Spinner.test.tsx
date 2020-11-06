import { render } from '@testing-library/react'
import Spinner from './Spinner'

describe('Spinner', () => {
  it('should render the Spinner', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toBeDefined()
  })

  it('should set a size for the Spinner', () => {
    const { container, rerender } = render(<Spinner />)
    const icon = container.querySelector('span')
    expect(icon).toHaveStyleRule('width', '20px')
    expect(icon).toHaveStyleRule('height', '20px')
    rerender(<Spinner size={40} />)
    expect(icon).toHaveStyleRule('width', '40px')
    expect(icon).toHaveStyleRule('height', '40px')
  })
})
