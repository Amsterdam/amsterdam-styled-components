import { render, cleanup } from '@testing-library/react'
import FilterBox from './FilterBox'

describe('FilterBox', () => {
  beforeEach(cleanup)
  it('should render', () => {
    const label = 'Test'
    const { getByText, getByTestId } = render(
      <FilterBox {...{ label }}>
        <div data-testid="aChild">hello</div>
      </FilterBox>,
    )

    expect(getByText(label)).toBeTruthy()
    expect(getByTestId('aChild')).toBeTruthy()
  })
})
