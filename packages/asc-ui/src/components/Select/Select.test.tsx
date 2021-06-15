/* eslint-disable @typescript-eslint/ban-types */
import { createRef } from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import 'jest-styled-components'
import Select from './Select'
import Label from '../Label'
import { ThemeProvider } from '../../theme'

describe('Select', () => {
  let container: any
  let rerender: Function
  let unmount: Function
  let getByTestId: Function

  const onChangeMock = jest.fn()
  const onKeyDownMock = jest.fn()

  beforeEach(() => {
    onChangeMock.mockReset()
    onKeyDownMock.mockReset()
    ;({ container, rerender, unmount, getByTestId } = render(
      <ThemeProvider>
        <Label htmlFor="select-1" label="Select 1" id="label-1">
          <Select
            id="select-1"
            onChange={onChangeMock}
            onKeyDown={onKeyDownMock}
          >
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
          </Select>
        </Label>
      </ThemeProvider>,
    ))
  })

  it('should match the style', () => {
    const select = container.querySelector('#select-1')
    expect(select).toHaveStyleRule('width', '100%')
  })

  it('should trigger the change event', () => {
    const select = container.querySelector('#select-1')

    expect(select.value).toBe('1')

    select.value = '2'

    expect(onChangeMock).not.toHaveBeenCalled()

    act(() => {
      fireEvent.change(select)
    })

    expect(select.value).toBe('2')
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('should trigger the keyDown event', () => {
    const select = container.querySelector('#select-1')

    expect(onKeyDownMock).not.toHaveBeenCalled()

    act(() => {
      fireEvent.keyDown(select, { key: 'Enter', code: 13 })
    })

    expect(onKeyDownMock).toHaveBeenCalledTimes(1)
  })

  it('should trigger the onChange event', () => {
    const select = container.querySelector('#select-1')

    expect(onChangeMock).not.toHaveBeenCalled()

    const firstOption = select.options[0]

    act(() => {
      fireEvent.change(select, { target: { value: firstOption.value } })
    })

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it("should update the overlay label when the field's value changes", () => {
    // clean the DOM by unmounting the component
    unmount()

    rerender(
      <ThemeProvider>
        <Label htmlFor="select-2" label="Select 2" id="label-2">
          <Select
            id="select-2"
            onChange={onChangeMock}
            onKeyDown={onKeyDownMock}
          >
            <option value="11">Option 11</option>
            <option value="12">Option 12</option>
            <option value="13">Option 13</option>
            <option value="14">Option 14</option>
          </Select>
        </Label>
      </ThemeProvider>,
    )

    const select = container.querySelector('#select-2')
    const firstOption = select.options[0]
    const secondOption = select.options[1]

    // first option value will always be set as the overlay label
    expect(getByTestId('selectedValue')).toHaveTextContent(firstOption.value)

    // programatically changing the value
    rerender(
      <ThemeProvider>
        <Label htmlFor="select-2" label="Select 2" id="label-2">
          <Select
            id="select-2"
            onChange={onChangeMock}
            onKeyDown={onKeyDownMock}
            value={secondOption.value}
          >
            <option value="11">Option 11</option>
            <option value="12">Option 12</option>
            <option value="13">Option 13</option>
            <option value="14">Option 14</option>
          </Select>
        </Label>
      </ThemeProvider>,
    )

    expect(getByTestId('selectedValue')).toHaveTextContent(secondOption.value)
  })

  it('should handle refs', () => {
    const ref = createRef<HTMLSelectElement>()

    render(
      <ThemeProvider>
        <Select ref={ref} />
      </ThemeProvider>,
    )

    expect(ref.current).toBeInstanceOf(HTMLSelectElement)
  })
})
