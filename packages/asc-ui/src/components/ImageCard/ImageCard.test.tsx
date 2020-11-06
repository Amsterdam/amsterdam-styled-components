import { render } from '@testing-library/react'
import ImageCard from './ImageCard'
import Heading from '../Heading'
import ImageCardContent from './ImageCardContent/ImageCardContent'

describe('ImageCard', () => {
  it('should render', () => {
    const { container } = render(
      <ImageCard backgroundImage="https://www.example.com">
        <ImageCardContent>
          <Heading forwardedAs="h4" styleAs="h2">
            Jeugdwerkloosheid Amsterdam daalt naar 6,2%
          </Heading>
        </ImageCardContent>
      </ImageCard>,
    )

    expect(container.firstChild).toBeDefined()
  })
})
