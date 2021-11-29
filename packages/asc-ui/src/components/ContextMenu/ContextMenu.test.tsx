import { ChevronDown } from '@amsterdam/asc-assets'
import { act, fireEvent, render, screen } from '@testing-library/react'
import type { Props } from './ContextMenu'
import ContextMenu from './ContextMenu'
import ContextMenuItem from './ContextMenuItem'

jest.useFakeTimers()

describe('ContextMenu', () => {
  function getComponent(props?: Props) {
    return (
      <ContextMenu arrowIcon={<ChevronDown />} label="Click on me" {...props}>
        <ContextMenuItem>One</ContextMenuItem>
        <ContextMenuItem>Two</ContextMenuItem>
        <ContextMenuItem>Three</ContextMenuItem>
      </ContextMenu>
    )
  }

  it('should render', () => {
    const { container } = render(getComponent())
    expect(container.firstChild).toBeDefined()
  })

  describe('click and blur', () => {
    it('should toggle the isOpen state', () => {
      const { getByTestId } = render(getComponent())
      expect(screen.getByRole('menu', { hidden: true })).toHaveStyleRule(
        'display',
        'none',
      )
      fireEvent.click(getByTestId('toggle'))
      expect(screen.getByRole('menu', { hidden: false })).toBeVisible()
    })

    it('should set the isOpen state from props', () => {
      const { rerender, getByTestId } = render(getComponent({ open: false }))
      expect(screen.getByRole('menu', { hidden: true })).toHaveStyleRule(
        'display',
        'none',
      )
      rerender(getComponent({ open: true }))
      expect(screen.getByRole('menu', { hidden: false })).toBeVisible()
      fireEvent.click(getByTestId('toggle'))
      expect(screen.getByRole('menu', { hidden: true })).toHaveStyleRule(
        'display',
        'none',
      )
    })

    it('should set the isOpen state to false and reset the selectedChild', () => {
      const { container } = render(getComponent({ open: true }))
      expect(screen.getByRole('menu', { hidden: false })).toBeVisible()
      act(() => {
        fireEvent.blur(container.firstChild as Element)
        jest.runAllTimers()
        expect(screen.getByRole('menu', { hidden: true })).toHaveStyleRule(
          'display',
          'none',
        )
      })
    })
  })
})
