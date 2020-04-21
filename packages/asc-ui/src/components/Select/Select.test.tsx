import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Select from './Select'
import Label from '../Label'
import { ThemeProvider } from '../../theme'

describe('Select', () => {
  let container: any

  const onChangeMock = jest.fn()
  const onKeyDownMock = jest.fn()

  beforeEach(() => {
    cleanup()
    ;({ container } = render(
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
    fireEvent.change(select)

    expect(select.value).toBe('2')
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('should trigger the keyDown event', () => {
    const select = container.querySelector('#select-1')

    fireEvent.keyDown(select, { key: 'Enter', code: 13 })

    expect(onKeyDownMock).toHaveBeenCalledTimes(1)
  })

  it('should handle refs', () => {
    const ref = React.createRef<HTMLSelectElement>()

    render(
      <ThemeProvider>
        <Select ref={ref} />
      </ThemeProvider>,
    )

    expect(ref.current).toBeInstanceOf(HTMLSelectElement)
  })
})
