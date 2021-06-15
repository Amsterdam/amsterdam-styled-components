import { cleanup, render } from '@testing-library/react'
import FilterTag from './FilterTag'
import { ThemeProvider } from '../../theme'

describe('FilterTag', () => {
  beforeEach(cleanup)
  it('should render and apply default style', () => {
    const { queryByText } = render(
      <ThemeProvider>
        <FilterTag>Verkeer en infrastructuur</FilterTag>
      </ThemeProvider>,
    )

    expect(queryByText(/Verkeer en infrastructuur/)).not.toBeNull()
  })
})
