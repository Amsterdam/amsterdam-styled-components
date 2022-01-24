import { render } from '@testing-library/react'
import { ThemeProvider } from '@amsterdam/asc-ui'
import Button from './Button'

describe('Button', () => {
  it('should render the button', () => {
    const { container } = render(
      <ThemeProvider>
        <Button>Hello</Button>
      </ThemeProvider>,
    )
    expect(container.firstChild).toBeDefined()
  })
})
