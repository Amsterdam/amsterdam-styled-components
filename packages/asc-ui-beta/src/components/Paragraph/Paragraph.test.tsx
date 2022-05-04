import { render } from '@testing-library/react'
import Paragraph from './Paragraph'

describe('Paragraph', () => {
  it('should render', () => {
    const { getByText } = render(<Paragraph>paragraph</Paragraph>)

    expect(getByText('paragraph')).toBeDefined()
  })
})
