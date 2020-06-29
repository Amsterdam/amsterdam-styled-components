import React from 'react'
import { Heading } from '@datapunt/asc-ui'

export default {
  title: 'UI/Typography/Heading',
}

export const DefaultStyle = () => (
  <>
    <Heading>Heading one</Heading>
    <Heading forwardedAs="h2">Heading two</Heading>
    <Heading forwardedAs="h3">Heading three</Heading>
    <Heading forwardedAs="h4">Heading four</Heading>
  </>
)
