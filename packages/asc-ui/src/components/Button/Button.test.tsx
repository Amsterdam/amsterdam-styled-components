import { render } from '@testing-library/react'
import Button from './Button'
import ThemeProvider from '../../theme/ThemeProvider'

describe('Button', () => {
  it('should render the button', () => {
    const { container } = render(
      <ThemeProvider>
        <Button color="primary">Hello</Button>
      </ThemeProvider>,
    )
    expect(container.firstChild).toBeDefined()
  })
})
