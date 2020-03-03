import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import { ChevronDown } from '@datapunt/asc-assets'
import ContextMenu, { Props } from './ContextMenu'
import ContextMenuItem from './ContextMenuItem'

jest.useFakeTimers()

describe('ContextMenu', () => {
  function getComponent(props?: Props) {
    return render(
      <ContextMenu arrowIcon={<ChevronDown />} label="Click on me" {...props}>
        <ContextMenuItem data-testid="childOne">One</ContextMenuItem>
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
    it('should toggle the open state', () => {
      const { getByTestId } = getComponent()
      expect(getByTestId('childOne')).not.toBeVisible()
      fireEvent.click(getByTestId('toggle'))
      expect(getByTestId('childOne')).toBeVisible()
    })

    it('should set the open state from props', () => {
      const { getByTestId } = getComponent({ open: true })
      expect(getByTestId('childOne')).toBeVisible()
      fireEvent.click(getByTestId('toggle'))
      expect(getByTestId('childOne')).not.toBeVisible()
    })

    it('should set the open state to false and reset the selectedChild', () => {
      const { getByTestId, container } = getComponent({ open: true })
      expect(getByTestId('childOne')).toBeVisible()
      act(() => {
        fireEvent.blur(container.firstChild as Element)
        jest.runAllTimers()
        expect(getByTestId('childOne')).not.toBeVisible()
      })
    })
  })
})
