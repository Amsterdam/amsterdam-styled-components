import { render } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import useEdgeDetection from './useEdgeDetection'

describe('useEdgeDetection', () => {
  it('should return an object of positions with booleans when a component hit the viewport edge', () => {
    const { result } = renderHook(() => useEdgeDetection<HTMLButtonElement>([]))
    const [ref, edgeDetection] = result.current
    act(() => {
      render(<button type="button" ref={ref} data-testid="element" />)
    })

    expect(edgeDetection).toEqual({
      bottom: false,
      left: false,
      right: false,
      top: false,
    })
  })
})
