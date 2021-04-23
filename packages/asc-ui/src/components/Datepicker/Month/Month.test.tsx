import { screen, render } from '@testing-library/react'
import Month from './Month'
import { ThemeProvider } from '../../../theme'

describe('Month', () => {
  it('should render', () => {
    const onSelectDay = jest.fn()
    render(
      <ThemeProvider>
        <Month open date="15-04-2019" onSelectDay={onSelectDay} />
      </ThemeProvider>,
    )

    expect(screen.queryByTestId('month')).toBeInTheDocument()
    expect(screen.queryByTestId('previous')).toBeInTheDocument()
    expect(screen.queryByTestId('next')).toBeInTheDocument()
    expect(screen.queryAllByTestId('weekday').length).toBe(7)
  })
})
