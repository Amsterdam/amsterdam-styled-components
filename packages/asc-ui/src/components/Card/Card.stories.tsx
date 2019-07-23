import { ChevronRight, Download } from '@datapunt/asc-assets'
import { storiesOf } from '@storybook/react'
import styled from '@datapunt/asc-core'
import React from 'react'
import Icon from '../Icon'
import Image from '../Image'
import Card from '.'
import CardActions from './CardActions'
import CardContent from './CardContent'
import CardMedia from './CardMedia'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

const CardContentStyled = styled(CardContent)`
  padding-top: 0;
  padding-bottom: 0;
`

storiesOf('Composed/Card', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px', background: 'rgb(248,248,248,0.8)' }}>
      {storyFn()}
    </div>
  ))
  .add('default', () => (
    <Card maxWidth={250}>
      <CardContent>
        <Heading as="h6">This is a card</Heading>
        <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
      </CardContent>
    </Card>
  ))
  .add('default with action', () => (
    <Card maxWidth={250}>
      <CardContent>
        <Heading as="h6">This is a card</Heading>
        <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
      </CardContent>
      <CardActions>
        <Icon size={15}>
          <ChevronRight />
        </Icon>
      </CardActions>
    </Card>
  ))
  .add('default with action and media item', () => (
    <Card maxWidth={250}>
      <CardMedia>
        <Image
          src="https://www.amsterdam.nl/publish/pages/900852/220px/38701-180724-mauritskade-brug-nathouden_an-02201460.jpg"
          alt="stadsloket"
        />
      </CardMedia>
      <CardContent>
        <Heading as="h6">Title</Heading>
        <Paragraph>This is a card</Paragraph>
      </CardContent>
      <CardActions>
        <Icon size={15}>
          <ChevronRight />
        </Icon>
      </CardActions>
    </Card>
  ))
  .add('with shadow', () => (
    <Card maxWidth={250} backgroundColor="level2" shadow>
      <CardContent>
        <Heading as="h6">This is a card</Heading>
        <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
      </CardContent>
      <CardActions>
        <Icon size={15}>
          <ChevronRight />
        </Icon>
      </CardActions>
    </Card>
  ))
  .add('horizontal', () => (
    <Card maxWidth={450} horizontal>
      <CardMedia backgroundColor="level2">
        <Icon size={25}>
          <Download />
        </Icon>
      </CardMedia>
      <CardContent>
        <Heading as="h6">This is a card</Heading>
        <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
      </CardContent>
      <CardActions>
        <Icon size={15}>
          <ChevronRight />
        </Icon>
      </CardActions>
    </Card>
  ))
  .add('horizontal - implementation on Dataportaal', () => (
    <Card maxWidth={450} horizontal>
      <CardMedia backgroundColor="level2">
        <Icon size={25}>
          <Download />
        </Icon>
      </CardMedia>
      <CardContentStyled>
        <Heading as="h6">This is a card</Heading>
        <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
      </CardContentStyled>
      <CardActions>
        <Icon size={15}>
          <ChevronRight />
        </Icon>
      </CardActions>
    </Card>
  ))
  .add('loading state (@TODO: Add Chris his loading util)', () => (
    <Card maxWidth={250} loading>
      <CardContent>
        <Heading as="h6">This is a card</Heading>
        <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
      </CardContent>
      <CardActions>
        <Icon size={15}>
          <ChevronRight />
        </Icon>
      </CardActions>
    </Card>
  ))
