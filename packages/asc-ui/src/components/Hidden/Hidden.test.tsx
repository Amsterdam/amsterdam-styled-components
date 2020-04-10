/* eslint-disable no-console */
import React from 'react'
import { render } from '@testing-library/react'
import Hidden from './Hidden'
import { WARNING_MESSAGES } from '../../utils/hooks/useMatchMedia'

describe('Hidden component and useMatchMedia hook', () => {
  const addEventListenerMock = jest.fn()
  const removeEventListenerMock = jest.fn()
  let matches = true
  beforeEach(() => {
    jest.spyOn(global.console, 'warn')
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches,
        media: query,
        addEventListener: addEventListenerMock,
        removeEventListener: removeEventListenerMock,
      })),
    })
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should not render the child when media matches', () => {
    const { container } = render(
      <Hidden query="(min-width: 300px;)">
        <span>Foo</span>
      </Hidden>,
    )

    expect(container.children.length).toBe(0)
  })

  it("should render the child when media doesn't match", () => {
    matches = false

    const { container, unmount } = render(
      <Hidden query="(min-width: 300px;)">
        <span>Foo</span>
      </Hidden>,
    )

    expect(addEventListenerMock).toHaveBeenCalled()
    expect(container.children.length).toBe(1)

    unmount()
    expect(removeEventListenerMock).toHaveBeenCalled()
  })

  describe('Console warnings', () => {
    it('should only show a warning in the console when both query and minBreakpoint and / or maxBreakpoint props are set', () => {
      render(
        <Hidden query="foo" minBreakpoint="tabletM">
          Hello
        </Hidden>,
      )

      expect(console.warn).toHaveBeenCalledWith(
        WARNING_MESSAGES.bothQueryAndOther,
      )

      jest.clearAllMocks()

      render(
        <Hidden
          query="(min-width: 300px;)"
          minBreakpoint="tabletM"
          maxBreakpoint="laptop"
        >
          Hello
        </Hidden>,
      )

      expect(console.warn).toHaveBeenCalledWith(
        WARNING_MESSAGES.bothQueryAndOther,
      )

      jest.clearAllMocks()

      render(<Hidden query="(min-width: 300px;)">Hello</Hidden>)

      expect(console.warn).not.toHaveBeenCalledWith(
        WARNING_MESSAGES.bothQueryAndOther,
      )

      jest.clearAllMocks()

      render(<Hidden minBreakpoint="tabletM">Hello</Hidden>)

      expect(console.warn).not.toHaveBeenCalledWith(
        WARNING_MESSAGES.bothQueryAndOther,
      )

      jest.clearAllMocks()

      render(<Hidden maxBreakpoint="tabletM">Hello</Hidden>)

      expect(console.warn).not.toHaveBeenCalledWith(
        WARNING_MESSAGES.bothQueryAndOther,
      )
    })

    it('should warn the user when no props are given', () => {
      jest.resetAllMocks()
      const { unmount } = render(<Hidden>Hello</Hidden>)

      expect(addEventListenerMock).not.toHaveBeenCalled()
      expect(console.warn).toHaveBeenCalledWith(WARNING_MESSAGES.noProps)
      unmount()
      expect(removeEventListenerMock).not.toHaveBeenCalled()
    })
  })
})
