import { render } from '@testing-library/react'
import Header from './Header'
import Typography from '../Typography'
import ThemeProvider from '../../theme/ThemeProvider'

const setup = (props = {}) =>
  render(
    <ThemeProvider>
      <Header
        title="Data en informatie"
        homeLink="http://data.amsterdam.nl"
        data-testid="header"
        {...props}
      >
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          debitis, dicta incidunt maxime necessitatibus voluptatibus.
        </Typography>
      </Header>
    </ThemeProvider>,
  )

describe('Header', () => {
  it('should render the short version', () => {
    const { getByTestId } = setup()

    expect(getByTestId('header')).toHaveStyleRule('max-width', 'none')
  })

  it('should render the short version without the full width', () => {
    const { getByTestId } = setup({ fullWidth: false })
    expect(getByTestId('header')).toHaveStyleRule('max-width', '1430px')
  })

  it('should render the tall version with a custom logo', () => {
    function CustomLogo() {
      return (
        <a href="/" data-testid="logo">
          some icon
        </a>
      )
    }

    const { getByTestId } = setup({ tall: true, logo: CustomLogo })
    expect(getByTestId('logo')).toBeDefined()
  })
})
