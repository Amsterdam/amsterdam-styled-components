import { fireEvent, render } from '@testing-library/react'
import MenuToggle from './MenuToggle'

describe('MenuToggle', () => {
  it('should render', () => {
    const { container } = render(<MenuToggle>foo</MenuToggle>)
    expect(container.firstChild).toBeDefined()
  })

  it('should toggle', () => {
    const { container, queryByText } = render(<MenuToggle>foo</MenuToggle>)
    const button = container.querySelector('button')
    const children = queryByText('foo')
    expect(children).toHaveAttribute('aria-hidden', 'true')
    fireEvent.click(button as HTMLButtonElement)
    expect(children).toHaveAttribute('aria-hidden', 'false')
  })
})
