import { createRef } from 'react'
import { render, fireEvent } from '@testing-library/react'
import Checkbox from './Checkbox'
import { ascDefaultTheme, ThemeProvider } from '../../theme'
import { themeColor } from '../../utils'

describe('Checkbox', () => {
  it('should toggle checked / not checked', () => {
    const onChangeMock = jest.fn()
    const { container } = render(
      <ThemeProvider>
        <Checkbox onChange={onChangeMock} />
      </ThemeProvider>,
    )

    const checkBox = container.querySelector('input')
    const icon = container.querySelector('span')

    expect(icon).toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )

    // Toggle on
    if (checkBox) {
      fireEvent.click(checkBox)
    }

    expect(onChangeMock).toHaveBeenCalled()
    expect(icon).not.toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )

    // Toggle off
    if (checkBox) {
      fireEvent.click(checkBox)
    }

    expect(icon).toHaveStyleRule(
      'background-color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )
  })

  it('should handle refs', () => {
    const ref = createRef<HTMLInputElement>()

    render(
      <ThemeProvider>
        <Checkbox ref={ref} />
      </ThemeProvider>,
    )

    expect(ref.current).toBeInstanceOf(HTMLInputElement)
    expect(ref.current?.type).toEqual('checkbox')
  })
})
