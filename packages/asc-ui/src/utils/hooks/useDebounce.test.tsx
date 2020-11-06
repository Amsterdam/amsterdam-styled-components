import { render, getByTestId, fireEvent, cleanup } from '@testing-library/react'
import useDebounce from './useDebounce'

describe('useActionOnEscape', () => {
  const mockFn: jest.Mock = jest.fn()
  let container: any
  let element: any

  beforeEach(() => {
    jest.useFakeTimers()
    ;({ container } = render(
      <div
        tabIndex={0}
        role="button"
        data-testid="element"
        onBlur={useDebounce(mockFn)}
      />,
    ))
    element = getByTestId(container, 'element')
  })

  afterEach(() => {
    jest.resetAllMocks()
    cleanup()
  })

  it('should call the function after setTimeout has been resolved', () => {
    fireEvent.blur(element)
    expect(mockFn).not.toHaveBeenCalled()
    jest.runAllTimers()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should clear the previous timeout if function is called multiple times', () => {
    fireEvent.blur(element)
    fireEvent.blur(element)
    fireEvent.blur(element)
    jest.runAllTimers()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
