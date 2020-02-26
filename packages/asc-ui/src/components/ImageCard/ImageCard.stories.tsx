import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import ImageCard from './ImageCard'
import { ImageCardContent } from './ImageCardContent'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

export default {
  title: 'Atoms/ImageCard',
  decorators: [withKnobs],
}

export const DefaultState = () => (
  <div style={{ maxWidth: '600px' }}>
    <ImageCard backgroundImage="http://lorempixel.com/output/food-q-c-640-480-3.jpg">
      <ImageCardContent>
        <Heading $as="h4" styleAs="h2">
          Jeugdwerkloosheid Amsterdam daalt naar 6,2%
        </Heading>
      </ImageCardContent>
    </ImageCard>
  </div>
)

export const LoadingState = () => (
  <div style={{ maxWidth: '600px' }}>
    <ImageCard
      isLoading
      backgroundImage="http://lorempixel.com/output/food-q-c-640-480-3.jpg"
    >
      <ImageCardContent>
        <Heading $as="h4" styleAs="h2">
          Jeugdwerkloosheid Amsterdam daalt naar 6,2%
        </Heading>
        <Paragraph gutterBottom={0}>
          Amsterdamse jongeren even vaak werkloos als gemiddeld in Nederland
        </Paragraph>
      </ImageCardContent>
    </ImageCard>
  </div>
)
