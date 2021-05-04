import { render, screen, fireEvent, act } from '@testing-library/react'
import MenuInline from '../MenuInline'
import MenuButton from '../MenuButton'
import MenuItem from '../MenuItem'
import MenuFlyOut from './MenuFlyOut'

describe('MenuFlyOut', () => {
  it('should render', () => {
    const { container } = render(
      <MenuInline>
        <MenuFlyOut label="Submenu">
          <MenuItem>
            <MenuButton forwardedAs="a" href="/">
              Link 1
            </MenuButton>
          </MenuItem>
          <MenuItem>
            <MenuButton forwardedAs="a" href="/">
              Link2
            </MenuButton>
          </MenuItem>
        </MenuFlyOut>
      </MenuInline>,
    )

    expect(screen.queryByTestId('flyout')).toBeInTheDocument()
    expect(screen.queryByTestId('flyoutButton')).toBeInTheDocument()
    expect(screen.getByText('Submenu')).toBeInTheDocument()

    expect(
      container.querySelector('button[aria-expanded="false"]'),
    ).toBeInTheDocument()

    const flyOut = screen.getByTestId('flyout')
    act(() => {
      fireEvent.mouseOver(flyOut)
    })

    // screen.debug()

    // @TODO fix aria-expanded test

    // expect(
    //   container.querySelector('button[aria-expanded="true"]'),
    // ).toBeInTheDocument()
  })
})
