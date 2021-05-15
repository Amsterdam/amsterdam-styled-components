import { fireEvent, render } from '@testing-library/react'
import Toggle from './Toggle'
import { ThemeProvider } from '../../theme'

describe('Toggle', () => {
  it('should toggle checked / not checked', () => {
    const { container } = render(
      <ThemeProvider>
        <Toggle id="id" left="Dag" right="Week" value="Dag" />
      </ThemeProvider>,
    )
    const labelLeft = container.querySelector('[for="id-Dag"]')
    const labelRight = container.querySelector('[for="id-Week"]')

    expect(container.querySelector('input:checked')).toEqual(
      expect.objectContaining({ value: 'Dag' }),
    )

    if (labelRight) {
      fireEvent.click(labelRight)
    }

    expect(container.querySelector('input:checked')).toEqual(
      expect.objectContaining({ value: 'Week' }),
    )

    if (labelLeft) {
      fireEvent.click(labelLeft)
    }

    expect(container.querySelector('input:checked')).toEqual(
      expect.objectContaining({ value: 'Dag' }),
    )
  })
})
