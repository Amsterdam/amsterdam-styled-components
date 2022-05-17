import { render } from '@testing-library/react'
import Heading from './Heading'

describe('Heading', () => {
  it('should render', () => {
    const { getByRole } = render(<Heading>heading</Heading>)

    expect(getByRole('heading')).toBeDefined()
  })
})
