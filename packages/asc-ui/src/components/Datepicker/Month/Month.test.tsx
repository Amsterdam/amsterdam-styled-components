import { screen, render } from '@testing-library/react'
import Month from './Month'
import { ThemeProvider } from '../../../theme'

describe('Month', () => {
  it('should not render when closed', () => {
    const onSelectDay = jest.fn()
    render(
      <ThemeProvider>
        <Month date="15-04-2019" onSelectDay={onSelectDay} />
      </ThemeProvider>,
    )

    expect(screen.queryByTestId('month')).not.toBeInTheDocument()
    expect(screen.queryByTestId('previous')).not.toBeInTheDocument()
    expect(screen.queryByTestId('next')).not.toBeInTheDocument()
    expect(screen.queryAllByTestId('weekday').length).toBe(0)
  })

  it('should render when open rendering a 4 week month', () => {
    const onSelectDay = jest.fn()
    render(
      <ThemeProvider>
        <Month open date="12-02-2021" onSelectDay={onSelectDay} />
      </ThemeProvider>,
    )

    expect(screen.queryByTestId('month')).toBeInTheDocument()
    expect(screen.queryByTestId('previous')).toBeInTheDocument()
    expect(screen.queryByTestId('next')).toBeInTheDocument()
    expect(screen.queryAllByTestId('weekday').length).toBe(7)
    expect(screen.queryAllByTestId('day').length).toBe(28)
  })

  it('should render when open rendering a 5 week month', () => {
    const onSelectDay = jest.fn()
    render(
      <ThemeProvider>
        <Month open date="12-04-2021" onSelectDay={onSelectDay} />
      </ThemeProvider>,
    )

    expect(screen.queryAllByTestId('day').length).toBe(35)
  })

  it('should render when open rendering a 6 week month', () => {
    const onSelectDay = jest.fn()
    render(
      <ThemeProvider>
        <Month open date="12-05-2021" onSelectDay={onSelectDay} />
      </ThemeProvider>,
    )

    expect(screen.queryAllByTestId('day').length).toBe(42)
  })
})
