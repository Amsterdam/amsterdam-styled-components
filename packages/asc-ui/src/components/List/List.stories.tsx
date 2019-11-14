import React from 'react'
import { storiesOf } from '@storybook/react'
import List from './List'
import ListItem from './ListItem'
import Link from '../Link/Link'
import OrderedList from './OrderedList'

storiesOf('Atoms/List', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default style', () => (
    <List>
      <ListItem>I am a ListLink!</ListItem>
      <ListItem>Another one</ListItem>
      <ListItem>A file!</ListItem>
    </List>
  ))
  .add('default style with chevron links', () => (
    <List>
      <ListItem>
        <Link href="/" variant="with-chevron">
          I am a ListLink!
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/" variant="with-chevron">
          Another one
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/" variant="with-chevron">
          A file!
        </Link>
      </ListItem>
    </List>
  ))
  .add('bullet list', () => (
    <List variant="bullet">
      <ListItem>Amsterdam Noord</ListItem>
      <ListItem>Amsterdam Zuid</ListItem>
      <ListItem>Amsterdam Oost</ListItem>
      <ListItem>
        <Link href="/">Amsterdam West</Link>
      </ListItem>
    </List>
  ))
  .add('ordered list', () => (
    <OrderedList>
      <ListItem>Amsterdam Noord</ListItem>
      <ListItem>Amsterdam Zuid</ListItem>
      <ListItem>Amsterdam Oost</ListItem>
      <ListItem>
        <Link href="/">Amsterdam West</Link>
      </ListItem>
    </OrderedList>
  ))
