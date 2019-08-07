import React from 'react'
import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import useFocusOnRender from './useFocusOnRender'

describe('useActionOnEscape', () => {
  const mockFn: jest.Mock = jest.fn()
  const ref: React.Ref<HTMLButtonElement> = React.createRef()

  beforeEach(() => {
    render(
      <button type="button" ref={ref} data-testid="element" onFocus={mockFn} />,
    )
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should focus the element when hook is called and element is rendered', () => {
    renderHook(() => useFocusOnRender(ref, true))
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('should not focus the element when hook is called with shouldFocus = false and element is rendered', () => {
    renderHook(() => useFocusOnRender(ref, false))
    expect(mockFn).not.toHaveBeenCalled()
  })
})
