// import { createRef } from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Day from './Day'
import { ascDefaultTheme, ThemeProvider } from '../../../theme'
import { themeColor } from '../../../utils'

describe('Day', () => {
  it('should render default day and check clicks', () => {
    const onSelectDay = jest.fn()
    render(
      <ThemeProvider>
        <Day date="15-04-2019" outside={false} selected={false} today={false} onSelectDay={onSelectDay}>15</Day>
      </ThemeProvider>,
    )

    expect(screen.queryByTestId('day')).toHaveStyleRule(
      'color',
      themeColor('tint', 'level7')({ theme: ascDefaultTheme }),
    )
    
    fireEvent.click(screen.queryByTestId('day'))

    expect(onSelectDay).toHaveBeenCalledWith('15-04-2019')

    
  })

  it('should render outside day', () => {
    render(
      <ThemeProvider>
        <Day date="15-04-2019" outside={true} selected={false} today={false}>15</Day>
      </ThemeProvider>,
    )

    expect(screen.queryByTestId('day')).toHaveStyleRule(
      'color',
      themeColor('tint', 'level4')({ theme: ascDefaultTheme }),
    )
  })

  it('should render selected day', () => {
    render(
      <ThemeProvider>
        <Day date="15-04-2019" outside={false} selected={true} today={false}>15</Day>
      </ThemeProvider>,
    )

    expect(screen.queryByTestId('day')).toHaveStyleRule(
      'color',
      themeColor('tint', 'level1')({ theme: ascDefaultTheme }),
    )
  })

  it('should render today', () => {
    render(
      <ThemeProvider>
        <Day date="15-04-2019" outside={false} selected={true} today={true}>15</Day>
      </ThemeProvider>,
    )

    expect(screen.queryByTestId('day')).toHaveStyleRule(
      'border-color',
      themeColor('tint', 'level5')({ theme: ascDefaultTheme }),
    )
  })
})
