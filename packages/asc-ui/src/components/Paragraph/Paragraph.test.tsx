import { render } from '@testing-library/react'
import Paragraph from './Paragraph'

describe('Paragraph', () => {
  it('should render', () => {
    const { container } = render(<Paragraph>Foo</Paragraph>)

    expect(container.firstChild).toBeDefined()
  })
})
