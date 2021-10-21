import { fireEvent, render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { createRef } from 'react'
import useClickOutside from './useClickOutside'

describe('useClickOutside', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should register click inside and outside the wrapper', () => {
    const isOutside = jest.fn()
    const wrapperRef = createRef<HTMLDivElement>()

    renderHook(() => useClickOutside(wrapperRef, () => isOutside()))

    render(
      <>
        <div ref={wrapperRef}>
          <span data-testid="inside">inside</span>
        </div>
        <span data-testid="outside">outside</span>
      </>,
    )

    fireEvent.mouseUp(screen.getByTestId('inside'))
    expect(isOutside).toHaveBeenCalledTimes(0)

    fireEvent.mouseUp(screen.getByTestId('outside'))
    expect(isOutside).toHaveBeenCalledTimes(1)
  })
})
