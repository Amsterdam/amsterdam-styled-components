import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Heading from './Heading'

storiesOf('Atoms/Typography/Heading', module).add('default style', () => (
  <>
    <Heading>Heading one</Heading>
    <Heading as="h2">Heading two</Heading>
    <Heading as="h3">Heading three</Heading>
    <Heading as="h4">Heading four</Heading>
  </>
))
