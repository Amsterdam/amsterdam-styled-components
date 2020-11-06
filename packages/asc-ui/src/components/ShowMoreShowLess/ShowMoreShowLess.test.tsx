import { render } from '@testing-library/react'
import ShowMoreShowLess from './ShowMoreShowLess'

describe('ShowMoreShowLess', () => {
  it('should render', () => {
    const { container } = render(<ShowMoreShowLess>Foo</ShowMoreShowLess>)
    expect(container.firstChild).toBeDefined()
  })
})
