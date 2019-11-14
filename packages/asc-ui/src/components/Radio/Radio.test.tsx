import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import Radio from './Radio'
import RadioGroup from './RadioGroup'

describe('Radio', () => {
  let container: any
  const onChangeMock = jest.fn()

  beforeEach(() => {
    cleanup()
    ;({ container } = render(
      <ThemeProvider theme={ascDefaultTheme}>
        <RadioGroup name="group">
          <Radio id="test" onChange={onChangeMock} />
        </RadioGroup>
      </ThemeProvider>,
    ))
  })

  it('should render', () => {
    expect(container).toMatchSnapshot()
  })

  it('should toggle checked / not checked', () => {
    const radio = container.querySelector('input')

    expect(radio).toHaveStyleRule('opacity', '0')

    // Toggle on
    fireEvent.click(radio)

    expect(onChangeMock).toHaveBeenCalled()
    // expect(icon).toHaveStyleRule('background-color', expect.any(String))

    // Toggle off
    // fireEvent.click(radio)

    // expect(icon).not.toHaveStyleRule('background-color', expect.any(String))
  })
})
