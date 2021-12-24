import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { createRef } from 'react'
import useFocus from './useFocus'

describe('useFocus', () => {
  const onFocusMock = jest.fn()
  const ref = createRef<HTMLButtonElement>()

  beforeEach(() => {
    render(<button type="button" ref={ref} onFocus={onFocusMock} />)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should focus the element', () => {
    renderHook(() => useFocus(ref))
    expect(onFocusMock).toHaveBeenCalledTimes(1)
  })

  it('should not focus the element with shouldFocus false', () => {
    renderHook(() => useFocus(ref, false))
    expect(onFocusMock).not.toHaveBeenCalled()
  })
})
