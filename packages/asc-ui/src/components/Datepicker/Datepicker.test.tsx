import { screen, render } from '@testing-library/react'
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
  })
})
