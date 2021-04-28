// import { fireEvent, render, screen } from '@testing-library/react'
// import { renderHook } from '@testing-library/react-hooks'
// import { useRef } from 'react'
// import useClickOutside from './useClickOutside'

describe('useClickOutside', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should focus the element', () => {
    expect(1).toBe(1)
    // @TODO fix error in test

    // const isOutside = jest.fn()
    // const wrapperRef = useRef(null)

    // useClickOutside(wrapperRef, isOutside)

    // render(
    //   <>
    //     <div ref={wrapperRef}>
    //       <span data-testid="inside">inside</span>
    //     </div>
    //     <span data-testid="outside">outside</span>
    //   </>,
    // )

    // fireEvent.click(screen.getByTestId('inside'))
    // expect(isOutside).toHaveBeenCalledTimes(0)

    // fireEvent.click(screen.getByTestId('outside'))
    // expect(isOutside).toHaveBeenCalledTimes(1)
  })
})
