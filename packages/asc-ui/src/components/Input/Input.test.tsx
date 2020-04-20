import { render } from '@testing-library/react'
import { mount } from 'enzyme'
import React from 'react'
import { KeyboardKeys } from '../../types'
import { renderWithTheme } from '../../utils/withTheme'
import Input from './Input'
import ThemeProvider from '../../theme/ThemeProvider'

jest.useFakeTimers()

const keyEvent = (value: KeyboardKeys | number) => {
  const key = typeof value === 'number' ? 'keyCode' : 'key'
  const event = {
    type: 'keydown',
    payload: {
      preventDefault: () => {},
      [key]: value,
    },
  }
  return event
}

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

  describe('component structure', () => {
    let component: Cheerio
    beforeEach(() => {
      component = renderWithTheme(<Input {...props} />)
    })

    it('should render', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('component behaviour', () => {
    let component: any
    let input: any

    beforeEach(() => {
      component = mount(<Input {...props} />)
      input = component.find('input')
    })

    it('should trigger the onOnChange event', () => {
      input.simulate('change', {
        target: { value: 'new-value' },
      })
      expect(onChangeMockFn).toHaveBeenCalledTimes(1)
    })

    it('should trigger the submit when enter is pressed', () => {
      const enterEvent = keyEvent(KeyboardKeys.Enter)
      input.simulate(enterEvent.type, enterEvent.payload)
      expect(onKeyDownMockFn).toHaveBeenCalledTimes(1)
    })
  })

  it('should handle refs', () => {
    const ref = React.createRef<HTMLInputElement>()

    render(
      <ThemeProvider>
        <Input ref={ref} />
      </ThemeProvider>,
    )

    expect(ref.current).toBeInstanceOf(HTMLInputElement)
    expect(ref.current?.type).toEqual('text')
  })
})
