import { createRef } from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import RadioGroup from './RadioGroup'
import Radio from './Radio'
import Label from '../Label'
import { ThemeProvider } from '../../theme'

describe('Radio', () => {
  let container: any

  const onChangeMock = jest.fn()

  beforeEach(() => {
    cleanup()
    ;({ container } = render(
      <ThemeProvider>
        <RadioGroup name="group" id="group">
          <Label htmlFor="radio-1" label="Radio 1" id="label-1">
            <Radio onChange={onChangeMock} id="radio-1" value="value-1" />
          </Label>
          <Label htmlFor="radio-2" label="Radio 2" id="label-2">
            <Radio onChange={onChangeMock} id="radio-2" value="value-2" />
          </Label>
        </RadioGroup>
      </ThemeProvider>,
    ))
  })

  it('should match the style', () => {
    const radio = container.querySelector('#radio-1')

    const circle = radio.previousSibling
    expect(circle).toHaveStyleRule('border-radius', '50%')

    const wrapper = radio.parentNode
    expect(wrapper).toHaveStyleRule('margin-bottom', '1px')

    const radioGroup = container.querySelector('#group')
    expect(radioGroup).toHaveStyleRule('flex-direction', 'column')
  })

  it('should change on click events', () => {
    const label1 = container.querySelector('#label-1')
    const label2 = container.querySelector('#label-2')

    expect(container.querySelector('input:checked')).toBe(null)

    // Click on Label Radio 1
    fireEvent.click(label1)

    expect(container.querySelector('input:checked').value).toBe('value-1')
    expect(onChangeMock).toHaveBeenCalledTimes(1)

    // Click on Label Radio 2
    fireEvent.click(label2)

    expect(container.querySelector('input:checked').value).toBe('value-2')
    expect(onChangeMock).toHaveBeenCalledTimes(2)

    // Click on Label Radio 1
    fireEvent.click(label1)

    expect(container.querySelector('input:checked').value).toBe('value-1')
    expect(onChangeMock).toHaveBeenCalledTimes(3)
  })

  it('should handle refs', () => {
    const ref = createRef<HTMLInputElement>()

    render(
      <ThemeProvider>
        <RadioGroup name="group" id="group">
          <Radio id="radio-1" value="value-1" ref={ref} />
        </RadioGroup>
      </ThemeProvider>,
    )

    expect(ref.current).toBeInstanceOf(HTMLInputElement)
    expect(ref.current?.type).toEqual('radio')
  })
})
