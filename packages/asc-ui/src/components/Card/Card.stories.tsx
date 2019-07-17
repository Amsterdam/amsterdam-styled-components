import { ChevronRight, Close } from '@datapunt/asc-assets'
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
    <div style={{ padding: '40px 10px', background: '#e5e5e5' }}>
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
  .add('default with media item right', () => (
    <Card maxWidth={250}>
      <CardContent>
        <Typography element="h6">Title</Typography>
        <Typography element="p">This is a card</Typography>
      </CardContent>
      <CardMedia>
        <Image
          src="https://www.amsterdam.nl/publish/pages/900852/41412-stadsloket-nw-8460.jpg"
          alt="stadsloket"
        />
      </CardMedia>
    </Card>
  ))
  .add('category', () => (
    <Card type="category" maxWidth={350}>
      <CardMedia>
        <Icon size={32}>
          <Close />
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
