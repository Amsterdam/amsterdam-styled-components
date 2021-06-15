import { render } from '@testing-library/react'
import MenuInline from './MenuInline'
import MenuItem from '../MenuItem'
import MenuButton from '../MenuButton'

describe('MenuInline', () => {
  const children = [
    <MenuItem key={1}>
      <MenuButton>Space Bear 6</MenuButton>
    </MenuItem>,
    <MenuItem key={2}>
      <MenuButton>Space Bear 6 Plus</MenuButton>
    </MenuItem>,
    <MenuItem key={3} data-testid="spacebear-7">
      <MenuButton>Space Bear 7</MenuButton>
    </MenuItem>,
  ]

  it('should render', () => {
    const { container } = render(<MenuInline>{children}</MenuInline>)
    expect(container.firstChild).toBeDefined()
  })

  it('should render the children', () => {
    const { getByTestId } = render(<MenuInline>{children}</MenuInline>)
    expect(getByTestId('spacebear-7')).toBeDefined()
  })
})
