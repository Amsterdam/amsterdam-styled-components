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

    screen.debug()

    expect(screen.queryAllByTestId('weekday').length).toBe(7)

    // fireEvent.click(day)

    // expect(onSelectDay).toHaveBeenCalledWith('15-04-2019')
  })
})
