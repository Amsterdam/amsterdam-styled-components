import { render } from '@testing-library/react'
import MenuList from './MenuList'

describe('MenuList', () => {
  let container: Element
  let getByText: (s: string) => any

  const children = 'foo'

  beforeEach(() => {
    ;({ container, getByText } = render(<MenuList>{children}</MenuList>))
  })

  it('should render', () => {
    expect(container.firstChild).toBeDefined()
  })

  it('should render the children', () => {
    expect(getByText('foo')).toBeDefined()
  })
})
