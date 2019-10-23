import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import FilterBox from './FilterBox'

describe('FilterBox', () => {
  beforeEach(cleanup)
  it('should render', () => {
    const subLabel = 'This sublabel...'
    const label = 'Test'
    const showMoreLabel = 'Toon meer'
    const { getByText, getByTestId } = render(
      <FilterBox {...{ label, subLabel, showMoreLabel }}>
        <div data-testid="aChild">hello</div>
      </FilterBox>,
    )

    expect(getByText(label)).toBeTruthy()
    expect(getByText(showMoreLabel)).toBeTruthy()
    expect(getByText(subLabel)).toBeTruthy()
    expect(getByTestId('aChild')).toBeTruthy()
  })
})
