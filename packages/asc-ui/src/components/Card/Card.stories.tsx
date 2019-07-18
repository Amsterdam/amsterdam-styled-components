import { ChevronRight } from '@datapunt/asc-assets'
import { storiesOf } from '@storybook/react'
import React from 'react'
import Icon from '../Icon'
import Image from '../Image'
import Typography from '../Typography'
import Card from '.'
import CardActions from './CardActions'
import CardContent from './CardContent'
import CardMedia from './CardMedia'

storiesOf('Composed/Card', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px', background: 'rgb(248,248,248,0.8)' }}>
      {storyFn()}
    </div>
  ))
  .add('default', () => (
    <Card maxWidth={250}>
      <CardContent>
        <Typography element="h6">This is a card</Typography>
        <Typography element="p">Lorem ipsum dolor sit amet</Typography>
      </CardContent>
    </Card>
  ))
  .add('default with action', () => (
    <Card maxWidth={250}>
      <CardContent>
        <Typography element="h6">This is a card</Typography>
        <Typography element="p">Lorem ipsum dolor sit amet</Typography>
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
          src="https://www.amsterdam.nl/publish/pages/900852/41412-stadsloket-nw-8460.jpg"
          alt="stadsloket"
        />
      </CardMedia>
      <CardContent>
        <Typography element="h6">Title</Typography>
        <Typography element="p">This is a card</Typography>
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
        <Typography element="h6">This is a card</Typography>
        <Typography element="p">Lorem ipsum dolor sit amet</Typography>
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
        <Icon size={15}>
          <ChevronRight />
        </Icon>
      </CardMedia>
      <CardContent>
        <Typography element="h6">This is a card</Typography>
        <Typography element="p">Lorem ipsum dolor sit amet</Typography>
      </CardContent>
      <CardActions>
        <Icon size={15}>
          <ChevronRight />
        </Icon>
      </CardActions>
    </Card>
  ))
