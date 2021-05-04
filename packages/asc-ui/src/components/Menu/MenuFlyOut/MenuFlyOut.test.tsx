import { render, screen, fireEvent, act } from '@testing-library/react'
import MenuInline from '../MenuInline'
import MenuContext from '../MenuContext'
import MenuFlyOut from './MenuFlyOut'

describe('MenuFlyOut', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should render and trigger mouseOver', () => {
    const { container } = render(
      <MenuInline>
        <MenuContext.Provider value={{ hasToggle: true }}>
          <MenuFlyOut label="Submenu">Flyout content</MenuFlyOut>
        </MenuContext.Provider>
      </MenuInline>,
    )

    expect(screen.queryByTestId('flyout')).toBeInTheDocument()
    expect(screen.queryByTestId('flyoutButton')).toBeInTheDocument()
    expect(screen.getByText('Submenu')).toBeInTheDocument()
    expect(screen.getByText('Flyout content')).toBeInTheDocument()

    expect(
      container.querySelector('button[aria-expanded="false"]'),
    ).toBeInTheDocument()

    const flyout = screen.getByTestId('flyout')
    act(() => {
      fireEvent.mouseOver(flyout)
    })

    act(() => {
      jest.runAllTimers()
    })

    // @TODO fix fireEvent.mouseOver not working
    expect(
      container.querySelector('button[aria-expanded="true"]'),
    ).toBeInTheDocument()
  })
})
