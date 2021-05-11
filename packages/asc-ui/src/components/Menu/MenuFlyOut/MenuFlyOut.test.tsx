import { render, screen, fireEvent, act } from '@testing-library/react'
import MenuInline from '../MenuInline'
import MenuFlyOut from './MenuFlyOut'

describe('MenuFlyOut', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should render and trigger mouseOver and close on mouseOut', () => {
    const { container } = render(
      <MenuInline>
        <MenuFlyOut label="Submenu">Flyout content</MenuFlyOut>={' '}
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
    fireEvent.mouseOver(flyout)

    act(() => {
      jest.runAllTimers()
    })

    expect(
      container.querySelector('button[aria-expanded="true"]'),
    ).toBeInTheDocument()
    fireEvent.mouseOut(flyout)

    act(() => {
      jest.runAllTimers()
    })

    expect(
      container.querySelector('button[aria-expanded="false"]'),
    ).toBeInTheDocument()
  })
})
