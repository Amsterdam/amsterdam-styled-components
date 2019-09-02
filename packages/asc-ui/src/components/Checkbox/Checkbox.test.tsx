import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { ascDefaultTheme, ThemeProvider } from '@datapunt/asc-core'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  let container: any
  const onChangeMock = jest.fn()

  beforeEach(() => {
    cleanup()
    ;({ container } = render(
      <ThemeProvider theme={ascDefaultTheme}>
        <Checkbox onChange={onChangeMock} />
      </ThemeProvider>,
    ))
  })

  it('should render', () => {
    expect(container).toMatchSnapshot()
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
})
