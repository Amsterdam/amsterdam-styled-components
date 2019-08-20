import * as React from 'react'
import { renderWithTheme } from '../../utils/withTheme'
import ImageCard from './ImageCard'
import Heading from '../Heading'
import ImageCardContent from './ImageCardContent/ImageCardContent'

describe('ImageCard', () => {
  it('should render', () => {
    const component = renderWithTheme(
      <ImageCard backgroundImage="https://www.example.com">
        <ImageCardContent>
          <Heading $as="h6" styleAs="h2">
            Jeugdwerkloosheid Amsterdam daalt naar 6,2%
          </Heading>
        </ImageCardContent>
      </ImageCard>,
    )

    expect(component).toMatchSnapshot()
  })
})
