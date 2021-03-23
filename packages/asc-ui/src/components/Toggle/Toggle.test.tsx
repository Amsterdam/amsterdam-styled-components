import { fireEvent, render } from '@testing-library/react'
import Toggle from './Toggle'
import { ThemeProvider } from '../../theme'

describe('Toggle', () => {
  it('should toggle checked / not checked', () => {
    // const onChangeMock = jest.fn()
    const { container } = render(
      <ThemeProvider>
        <Toggle id="id" left="Dag" right="Week" value="Dag" />
      </ThemeProvider>,
    )
    // const input1 = container.querySelector('#id-Dag')
    const input2 = container.querySelector('#id-Week')

    expect(container.querySelector('input:checked').value).toBe('Dag')

    fireEvent.click(input2)

    expect(container.querySelector('input:checked').value).toBe('Week')
  })
})
