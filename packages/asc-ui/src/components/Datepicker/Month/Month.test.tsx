import { screen, render } from '@testing-library/react'
import Month from './Month'
import { ThemeProvider } from '../../../theme'
// import { themeColor } from '../../../utils'

describe('Month', () => {
  it('should render default', () => {
    const onSelectDay = jest.fn()
    render(
      <ThemeProvider>
        <Month open date="15-04-2019" onSelectDay={onSelectDay} />
      </ThemeProvider>,
    )

    expect(screen.queryAllByTestId('weekday').length).toBe(7)
  })
})
