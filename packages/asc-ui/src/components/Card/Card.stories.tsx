import { ChevronRight, Download } from '@datapunt/asc-assets'
import React from 'react'
import Icon from '../Icon'
import Image from '../Image'
import Card from '.'
import CardActions from './CardActions'
import CardContent from './CardContent'
import CardMedia from './CardMedia'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

export default {
  title: 'Atoms/Card',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px', background: 'rgb(248,248,248,0.8)' }}>
        {storyFn()}
      </div>
    ),
  ],
}

export const Default = () => (
  <Card maxWidth={250}>
    <CardContent>
      <Heading as="h6">This is a card</Heading>
      <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
    </CardContent>
  </Card>
)

export const DefaultWithAction = () => (
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
)

export const DefaultWithActionAndMediaItem = () => (
  <Card maxWidth={250}>
    <CardMedia>
      <Image src="https://picsum.photos/300/200/" alt="stadsloket" square />
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
)

export const WithShadow = () => (
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
)

export const HorizontalWithActionAndMediaItem = () => (
  <Card maxWidth={450} horizontal>
    <CardMedia maxWidth={100} backgroundColor="level2">
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
)

export const LoadingStateDefault = () => (
  <Card maxWidth={250} isLoading>
    <CardContent>
      <Heading as="h6" />
      <Paragraph />
    </CardContent>
  </Card>
)

export const LoadingStateWithAction = () => (
  <Card maxWidth={250} isLoading>
    <CardContent>
      <Heading as="h6" />
      <Paragraph />
    </CardContent>
    <CardActions>
      <Icon size={15}>
        <ChevronRight />
      </Icon>
    </CardActions>
  </Card>
)

export const LoadingStateHorizontal = () => (
  <Card maxWidth={450} horizontal isLoading>
    <CardMedia backgroundColor="level2">
      <Icon size={25}>
        <Download />
      </Icon>
    </CardMedia>
    <CardContent>
      <Heading as="h6" />
      <Paragraph />
    </CardContent>
    <CardActions>
      <Icon size={15}>
        <ChevronRight />
      </Icon>
    </CardActions>
  </Card>
)
