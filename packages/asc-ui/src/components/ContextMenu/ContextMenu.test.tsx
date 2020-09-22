import { ChevronDown } from '@amsterdam/asc-assets'
import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import ContextMenu, { Props } from './ContextMenu'
import ContextMenuItem from './ContextMenuItem'

jest.useFakeTimers()

describe('ContextMenu', () => {
  function getComponent(props?: Props) {
    return render(
      <ContextMenu arrowIcon={<ChevronDown />} label="Click on me" {...props}>
        <ContextMenuItem>One</ContextMenuItem>
        <ContextMenuItem>Two</ContextMenuItem>
        <ContextMenuItem>Three</ContextMenuItem>
      </ContextMenu>,
    )
  }

  it('should render', () => {
    const { container } = getComponent()
    expect(container.firstChild).toBeDefined()
  })

  describe('click and blur', () => {
    it('should toggle the isOpen state', () => {
      const { getByTestId } = getComponent()
      expect(screen.getByRole('menu', { hidden: true })).toHaveStyleRule(
        'display',
        'none',
      )
      fireEvent.click(getByTestId('toggle'))
      expect(screen.getByRole('menu', { hidden: false })).toBeVisible()
    })

    it('should set the isOpen state from props', () => {
      const { getByTestId } = getComponent({ open: true })
      expect(screen.getByRole('menu', { hidden: false })).toBeVisible()
      fireEvent.click(getByTestId('toggle'))
      expect(screen.getByRole('menu', { hidden: true })).toHaveStyleRule(
        'display',
        'none',
      )
    })

    it('should set the isOpen state to false and reset the selectedChild', () => {
      const { container } = getComponent({ open: true })
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
