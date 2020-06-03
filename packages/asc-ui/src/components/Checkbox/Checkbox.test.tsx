import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Checkbox from './Checkbox'
import { ThemeProvider } from '../../theme'

describe('Checkbox', () => {
  let container: any
  let rerender: Function
  const onChangeMock = jest.fn()

  beforeEach(() => {
    cleanup()
    ;({ container, rerender } = render(
      <ThemeProvider>
        <Checkbox variant="primary" onChange={onChangeMock} />
      </ThemeProvider>,
    ))
  })

  it('should toggle checked / not checked', () => {
    const checkBox = container.querySelector('input')
    const icon = container.querySelector('span')

    expect(icon).not.toHaveStyleRule('background-color', expect.any(String))

    // Toggle on
    fireEvent.click(checkBox)

    expect(onChangeMock).toHaveBeenCalled()
    expect(icon).toHaveStyleRule('background-color', expect.any(String))

    // Toggle off
    fireEvent.click(checkBox)

    expect(icon).not.toHaveStyleRule('background-color', expect.any(String))
  })

  it('should toggle checked / not checked when the props change', () => {
    const icon = container.querySelector('span')

    expect(icon).not.toHaveStyleRule('background-color', expect.any(String))

    // Toggle on by changing props
    rerender(
      <ThemeProvider>
        <Checkbox checked variant="secondary" />
      </ThemeProvider>,
    )

    expect(icon).toHaveStyleRule('background-color', expect.any(String))

    // Toggle of by changing props
    rerender(
      <ThemeProvider>
        <Checkbox />
      </ThemeProvider>,
    )

    expect(icon).not.toHaveStyleRule('background-color', expect.any(String))
  })

  it('should handle refs', () => {
    const ref = React.createRef<HTMLInputElement>()

    render(
      <ThemeProvider>
        <Checkbox ref={ref} />
      </ThemeProvider>,
    )

    expect(ref.current).toBeInstanceOf(HTMLInputElement)
    expect(ref.current?.type).toEqual('checkbox')
  })
})
