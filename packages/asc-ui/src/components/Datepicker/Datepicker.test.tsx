import { render } from '@testing-library/react'
import Datepicker from './Datepicker'

describe('Datepicker', () => {
  it('should render', () => {
    const { container } = render(<Datepicker />)
    expect(container.firstChild).toBeDefined()
  })
})
