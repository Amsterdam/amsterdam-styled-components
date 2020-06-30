import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import {
  ImageCardContent,
  ImageCard,
  Heading,
  Paragraph,
} from '@datapunt/asc-ui'

export default {
  title: 'UI/ImageCard',
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ maxWidth: '600px' }}>{storyFn()}</div>
    ),
    withKnobs,
  ],
}

export const DefaultState = () => (
  <ImageCard backgroundImage="http://lorempixel.com/output/food-q-c-640-480-3.jpg">
    <ImageCardContent>
      <Heading forwardedAs="h4" styleAs="h2">
        Jeugdwerkloosheid Amsterdam daalt naar 6,2%
      </Heading>
    </ImageCardContent>
  </ImageCard>
)

export const LoadingState = () => (
  <ImageCard
    isLoading
    backgroundImage="http://lorempixel.com/output/food-q-c-640-480-3.jpg"
  >
    <ImageCardContent>
      <Heading forwardedAs="h4" styleAs="h2">
        Jeugdwerkloosheid Amsterdam daalt naar 6,2%
      </Heading>
      <Paragraph gutterBottom={0}>
        Amsterdamse jongeren even vaak werkloos als gemiddeld in Nederland
      </Paragraph>
    </ImageCardContent>
  </ImageCard>
)
