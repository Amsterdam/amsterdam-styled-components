import { render } from '@testing-library/react'
import TopBar from './TopBar'

describe('TopBar', () => {
  it('should render', () => {
    const { container } = render(<TopBar>Foo</TopBar>)

    expect(container.firstChild).toBeDefined()
  })
})
