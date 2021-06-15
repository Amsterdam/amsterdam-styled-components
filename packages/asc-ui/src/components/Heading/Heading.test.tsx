import { render } from '@testing-library/react'
import Heading from './Heading'
import ThemeProvider from '../../theme/ThemeProvider'

describe('Heading', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Heading data-testid="h1" as="h1">
          Foo
        </Heading>
        <Heading data-testid="h2" as="h2">
          Foo
        </Heading>
        <Heading data-testid="h3" as="h3">
          Foo
        </Heading>
        <Heading data-testid="h4" as="h4">
          Foo
        </Heading>
        <Heading data-testid="h5" as="h5">
          Foo
        </Heading>
        <Heading data-testid="h6" as="h6">
          Foo
        </Heading>
      </ThemeProvider>,
    )

    expect(getByTestId('h1')).toHaveStyleRule('font-size', '24px')
    expect(getByTestId('h2')).toHaveStyleRule('font-size', '20px')
    expect(getByTestId('h3')).toHaveStyleRule('font-size', '20px')
    expect(getByTestId('h4')).toHaveStyleRule('font-size', '18px')
    expect(getByTestId('h5')).toHaveStyleRule('font-size', '18px')
    expect(getByTestId('h6')).toHaveStyleRule('font-size', '16px')
  })
})
