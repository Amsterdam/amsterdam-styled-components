import { screen, render, fireEvent } from '@testing-library/react'
import Datepicker from './Datepicker'
import { ThemeProvider } from '../../theme'

describe('Datepicker', () => {
  it('should render', () => {
    render(
      <ThemeProvider>
        <Datepicker />
      </ThemeProvider>,
    )

    expect(screen.queryByTestId('datepicker')).toBeInTheDocument()
    expect(screen.queryByTestId('input')).toBeInTheDocument()
    expect(screen.queryByTestId('month')).not.toBeInTheDocument()
  })

  it('should render the month view when you click the input', () => {
    render(
      <ThemeProvider>
        <Datepicker />
      </ThemeProvider>,
    )

    fireEvent.click(screen.getByTestId('input'))

    expect(screen.queryByTestId('month')).toBeInTheDocument()
  })
})
