import { render } from '@testing-library/react'
import MenuItemTitle from './MenuItemTitle'

describe('MenuItemTitle', () => {
  let container: Element
  let getByText: (s: string) => any

  const children = 'foo'

  beforeEach(() => {
    ;({ container, getByText } = render(
      <MenuItemTitle>{children}</MenuItemTitle>,
    ))
  })

  it('should render', () => {
    expect(container.firstChild).toBeDefined()
  })

  it('should render the children', () => {
    expect(getByText('foo')).toBeDefined()
  })
})
