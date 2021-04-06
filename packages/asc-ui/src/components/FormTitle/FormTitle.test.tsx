import { render } from '@testing-library/react'
import FormTitle from './FormTitle'
import ThemeProvider from '../../theme/ThemeProvider'

describe('FormTitle', () => {
  it('should render', () => {
    const { container, queryByText } = render(
      <ThemeProvider>
        <FormTitle>Foo</FormTitle>
      </ThemeProvider>,
    )

    expect(container).toBeInTheDocument()
    expect(queryByText('Foo')).toBeInTheDocument()
  })

  it('should match the style of the design system', () => {
    const { container } = render(
      <ThemeProvider>
        <FormTitle>Foo</FormTitle>
      </ThemeProvider>,
    )

    expect(container.firstChild).toHaveStyleRule('font-size', '14px')
    expect(container.firstChild).toHaveStyleRule('line-height', '18px')
    expect(container.firstChild).toHaveStyleRule('font-weight', '700')
  })

  it('should not render anything without children', () => {
    const { container } = render(
      <ThemeProvider>
        <FormTitle />
      </ThemeProvider>,
    )
    expect(container.firstChild).not.toBeInTheDocument()
  })
})
