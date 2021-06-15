import { render, fireEvent } from '@testing-library/react'
import { createRef } from 'react'
import { KeyboardKeys } from '../../types'
import Input from './Input'
import ThemeProvider from '../../theme/ThemeProvider'

jest.useFakeTimers()

describe('Input', () => {
  const onBlurMockFn = jest.fn()
  const onChangeMockFn = jest.fn()
  const onFocusMockFn = jest.fn()
  const onKeyDownMockFn = jest.fn()
  const props = {
    id: 'id',
    onBlur: onBlurMockFn,
    onChange: onChangeMockFn,
    onFocus: onFocusMockFn,
    onKeyDown: onKeyDownMockFn,
    value: 'test-value',
  }

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('component behaviour', () => {
    let input: any

    beforeEach(() => {
      const { container } = render(<Input {...props} />)
      input = container.firstChild
    })

    it('should trigger the onOnChange event', () => {
      fireEvent.change(input, { target: { value: 'a' } })
      expect(onChangeMockFn).toHaveBeenCalledTimes(1)
    })

    it('should trigger the submit when enter is pressed', () => {
      fireEvent.keyDown(input, { key: KeyboardKeys.Enter })
      expect(onKeyDownMockFn).toHaveBeenCalledTimes(1)
    })
  })

  it('should handle refs', () => {
    const ref = createRef<HTMLInputElement>()

    render(
      <ThemeProvider>
        <Input ref={ref} />
      </ThemeProvider>,
    )

    expect(ref.current).toBeInstanceOf(HTMLInputElement)
    expect(ref.current?.type).toEqual('text')
  })
})
