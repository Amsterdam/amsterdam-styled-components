import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Checkbox from './Checkbox'
import { ascDefaultTheme, ThemeProvider } from '../../theme'
import { themeColor } from '../../utils'

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

    expect(icon).toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )

    // Toggle on
    fireEvent.click(checkBox)

    expect(onChangeMock).toHaveBeenCalled()
    expect(icon).not.toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )

    // Toggle off
    fireEvent.click(checkBox)

    expect(icon).toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )
  })

  it('should toggle checked / not checked when the props change', () => {
    const icon = container.querySelector('span')

    expect(icon).toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )

    // Toggle on by changing props
    rerender(
      <ThemeProvider>
        <Checkbox checked variant="secondary" />
      </ThemeProvider>,
    )

    expect(icon).not.toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )

    // Toggle of by changing props
    rerender(
      <ThemeProvider>
        <Checkbox />
      </ThemeProvider>,
    )

    expect(icon).toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )
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
