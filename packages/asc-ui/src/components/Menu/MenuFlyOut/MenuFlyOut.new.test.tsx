import { render, screen } from '@testing-library/react'
import MenuInline from '../MenuInline'
import MenuFlyOut from './MenuFlyOut'

describe('MenuFlyOut', () => {
  it('should render', () => {
    render(
      <MenuInline>
        <MenuFlyOut label="Submenu">menu</MenuFlyOut>
      </MenuInline>,
    )

    expect(screen.queryByTestId('flyout')).toBeInTheDocument()
    expect(screen.getByText('Submenu')).toBeInTheDocument()
  })
})

//
//     <MenuFlyOut label="Submenu">
//     <MenuItem>
//       <MenuButton forwardedAs="a" href="/" iconLeft={<ChevronRight />}>
//         Link 1
//       </MenuButton>
//     </MenuItem>
//     <MenuItem>
//       <MenuButton forwardedAs="a" href="/" iconLeft={<ChevronRight />}>
//         Link2
//       </MenuButton>
//     </MenuItem>
//   </MenuFlyOut>
