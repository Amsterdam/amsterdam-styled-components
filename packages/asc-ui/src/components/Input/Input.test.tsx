import * as React from 'react'
import { mount } from 'enzyme'
import Input from './Input'
import { renderWithTheme } from '../../utils/withTheme'
import { KeyboardKeys } from '../../types'
import 'jest-styled-components'

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
  const onChangeMockFn = jest.fn()
  const onKeyDownMockFn = jest.fn()

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('component structure', () => {
    let component: Cheerio
    beforeEach(() => {
      component = renderWithTheme(
        <Input
          onChange={onChangeMockFn}
          onKeyDown={onKeyDownMockFn}
          value="test-value"
        />,
      )
    })

    it('should render', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('component behaviour', () => {
    let component: any
    let input: any

    beforeEach(() => {
      component = mount(
        <Input
          onChange={onChangeMockFn}
          onKeyDown={onKeyDownMockFn}
          value="test-value"
        />,
      )
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
})
