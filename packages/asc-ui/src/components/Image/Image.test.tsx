import { render } from '@testing-library/react'
import Image from './Image'

describe('Image', () => {
  it('should render the data attribute for the objectFit polyfill', () => {
    const { container } = render(<Image src="source" square />)

    expect(container.firstChild).toHaveAttribute('data-object-fit')
    expect(container.firstChild).toHaveStyleRule('object-fit', 'cover')
  })
})
