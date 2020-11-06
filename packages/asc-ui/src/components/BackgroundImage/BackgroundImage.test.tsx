import { render } from '@testing-library/react'
import BackgroundImage from './BackgroundImage'

describe('BackgroundImage', () => {
  it('should render', () => {
    const { container } = render(
      <BackgroundImage source="http://the-image-path" />,
    )
    expect(container.firstChild).toBeDefined()
  })
})
