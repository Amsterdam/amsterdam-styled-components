import { render, fireEvent } from '@testing-library/react'
import useActionOnEscape from './useActionOnEscape'

describe('useActionOnEscape', () => {
  it('should call the function when user presses the escape button', () => {
    const mockFn = jest.fn()
    const { onKeyDown } = useActionOnEscape(mockFn)
    const { getByTestId } = render(
      <div
        tabIndex={0}
        role="button"
        data-testid="element"
        onKeyDown={onKeyDown}
      />,
    )
    const element = getByTestId('element')
    fireEvent.keyDown(element, { key: 'Escape' })
    fireEvent.keyDown(element, { key: 'Enter' })

    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
