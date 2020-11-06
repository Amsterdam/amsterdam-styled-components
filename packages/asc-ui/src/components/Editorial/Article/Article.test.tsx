import { render } from '@testing-library/react'
import Article from './Article'

describe('Article', () => {
  it('should render', () => {
    const { container } = render(
      <Article>This is the publication content</Article>,
    )
    expect(container.firstChild).toBeDefined()
  })
})
