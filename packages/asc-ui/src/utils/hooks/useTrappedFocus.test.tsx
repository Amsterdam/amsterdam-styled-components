import { useRef } from 'react'
import { render } from '@testing-library/react'
import useTrappedFocus from './useTrappedFocus'
import { KeyboardKeys } from '../../types'

describe('useTrappedFocus', () => {
  let keyDown: any
  let elementFocus1: HTMLElement
  let elementFocus2: HTMLElement
  let elementFocus3: HTMLElement

  beforeEach(() => {
    function Component() {
      const ref: any = useRef()
      ;({ keyDown } = useTrappedFocus(ref))

      return (
        <div>
          <div
            role="presentation"
            ref={ref}
            data-testid="element"
            onKeyDown={keyDown}
          >
            <a href="/" data-testid="focus1">
              Foo
            </a>
            <button type="button" data-testid="focus2">
              Bar
            </button>
            <button type="button" data-testid="focus3">
              Baz
            </button>
          </div>
          <a href="/" data-testid="outsideElement">
            I should not get a focus
          </a>
        </div>
      )
    }

    const { getByTestId } = render(<Component />)

    elementFocus1 = getByTestId('focus1')
    elementFocus2 = getByTestId('focus2')
    elementFocus3 = getByTestId('focus3')
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should do nothing when the focussed element is neither first or last (browser will handle focus on the next child)', () => {
    elementFocus2.focus()

    keyDown({ key: KeyboardKeys.Tab, preventDefault: jest.fn() })
    expect(window.document.activeElement).toEqual(elementFocus2)
  })

  it('should focus on the first element when last element is focussed and user tabs', () => {
    elementFocus3.focus()

    keyDown({ key: KeyboardKeys.Tab, preventDefault: jest.fn() })
    expect(window.document.activeElement).toEqual(elementFocus1)
  })

  it('should focus on the last element when first element is focussed and user shift + tabs', () => {
    elementFocus1.focus()

    keyDown({
      key: KeyboardKeys.Tab,
      shiftKey: true,
      preventDefault: jest.fn(),
    })
    expect(window.document.activeElement).toEqual(elementFocus3)
  })
})
