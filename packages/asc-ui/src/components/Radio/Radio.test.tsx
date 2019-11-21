import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import RadioGroup from './RadioGroup'
import Radio from './Radio'

describe('Radio', () => {
  let container: any

  const onChangeMock = jest.fn()

  beforeEach(() => {
    cleanup()
    ;({ container } = render(
      <ThemeProvider theme={ascDefaultTheme}>
        <RadioGroup id="group">
          <Radio onChange={onChangeMock} id="radio-1" />
          <Radio onChange={onChangeMock} id="radio-2" />
        </RadioGroup>
      </ThemeProvider>,
    ))
  })

  it('should render', () => {
    expect(container).toMatchSnapshot()
  })

  it('should match the style', () => {
    // Native radio should be hidden
    const radio = container.querySelector('#radio-1')
    expect(radio).toHaveStyleRule('opacity', '0')

    const circle = radio.previousSibling
    expect(circle).toHaveStyleRule('border-radius', '50%')

    const wrapper = radio.parentNode
    expect(wrapper).toHaveStyleRule('margin-bottom', '1px')

    const radioGroup = container.querySelector('#group')
    expect(radioGroup).toHaveStyleRule('flex-direction', 'column')
  })

  it('should change on click events', () => {
    const radio1 = container.querySelector('#radio-1')
    const circle1 = radio1.previousSibling
    const radio2 = container.querySelector('#radio-2')

    expect(circle1).toHaveStyleRule('color', '#767676')

    // Click on Radio 1
    fireEvent.click(radio1)

    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(circle1).not.toHaveStyleRule('color', '#767676')

    // Clilck on Radio 2
    fireEvent.click(radio2)

    expect(onChangeMock).toHaveBeenCalledTimes(2)
    expect(circle1).toHaveStyleRule('color', '#767676')
  })
})
