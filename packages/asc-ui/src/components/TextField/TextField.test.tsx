import { render } from '@testing-library/react'
import TextField from './TextField'
import { ThemeProvider } from '../../theme'

describe('TextField', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeProvider>
        <TextField
          label="description"
          srOnly={false}
          value="test-value"
          onChange={jest.fn}
        />
      </ThemeProvider>,
    )
    expect(container.firstChild).toBeDefined()
  })
})
