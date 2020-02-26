import * as React from 'react'
import Heading from './Heading'

export default {
  title: 'Atoms/Typography/Heading',
}

export const DefaultStyle = () => (
  <>
    <Heading>Heading one</Heading>
    <Heading $as="h2">Heading two</Heading>
    <Heading $as="h3">Heading three</Heading>
    <Heading $as="h4">Heading four</Heading>
  </>
)
