import React from 'react'
import { storiesOf } from '@storybook/react'
import List from './List'
import ListItem from './ListItem'
import Link from '../Link/Link'

storiesOf('Atoms/List', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default', () => (
    <List>
      <ListItem>
        <Link href="/" linkType="with-chevron">
          I am a ListLink!
        </Link>
      </ListItem>
      <ListItem href="/">
        <Link href="/" linkType="with-chevron">
          Another one
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/" linkType="with-chevron">
          A loooooong, very, very, very long link
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/" linkType="with-chevron">
          A file!
        </Link>
      </ListItem>
    </List>
  ))
