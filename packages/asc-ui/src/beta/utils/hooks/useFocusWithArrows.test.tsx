import { useRef } from 'react'
import { fireEvent, render } from '@testing-library/react'
import useFocusWithArrows from './useFocusWithArrows'
import Keys from '../../types/KeyboardKeys'

describe('useFocusWithArrows', () => {
  const onFocusOneMock = jest.fn()
  const onFocusTwoMock = jest.fn()
  const onFocusThreeMock = jest.fn()
  const getComponent =
    (rotate: boolean | undefined = undefined) =>
    () => {
      const ref = useRef<HTMLDivElement>(null)
      const { keyDown } = useFocusWithArrows(ref, rotate)
      return (
        <div onKeyDown={keyDown} tabIndex={0} role="menu" ref={ref}>
          <button onFocus={onFocusOneMock} type="button">
            One
          </button>
          <button onFocus={onFocusTwoMock} type="button">
            Two
          </button>
          <button onFocus={onFocusThreeMock} type="button">
            Three
          </button>
        </div>
      )
    }

  afterEach(() => {
    onFocusOneMock.mockReset()
    onFocusTwoMock.mockReset()
    onFocusThreeMock.mockReset()
  })

  it('should set the focus when using the Arrow keys', () => {
    const Component = getComponent()
    const { container } = render(<Component />)
    const firstChild = container.firstChild as HTMLElement
    expect(onFocusOneMock).not.toHaveBeenCalled()

    // 4 times, so we can check if there are no other elements focussed after reaching the last one
    Array.from(Array(4).keys()).forEach(() => {
      fireEvent.keyDown(firstChild, {
        key: Keys.ArrowDown,
      })
    })

    expect(onFocusOneMock).toHaveBeenCalledTimes(1)
    expect(onFocusTwoMock).toHaveBeenCalledTimes(1)
    expect(onFocusThreeMock).toHaveBeenCalledTimes(1)

    // Same here
    Array.from(Array(4).keys()).forEach(() => {
      fireEvent.keyDown(firstChild, {
        key: Keys.ArrowUp,
      })
    })
    expect(onFocusTwoMock).toHaveBeenCalledTimes(2)
    expect(onFocusOneMock).toHaveBeenCalledTimes(2)
  })

  it('should rotate the focussed elements', () => {
    const Component = getComponent(true)
    const { container } = render(<Component />)
    const firstChild = container.firstChild as HTMLElement

    Array.from(Array(9).keys()).forEach(() => {
      fireEvent.keyDown(firstChild, {
        key: Keys.ArrowDown,
      })
    })

    expect(onFocusOneMock).toHaveBeenCalledTimes(3)

    Array.from(Array(9).keys()).forEach(() => {
      fireEvent.keyDown(firstChild, {
        key: Keys.ArrowUp,
      })
    })
    expect(onFocusOneMock).toHaveBeenCalledTimes(6)
  })
})
