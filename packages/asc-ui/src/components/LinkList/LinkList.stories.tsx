import React from 'react'
import { storiesOf } from '@storybook/react/'
import LinkList from './LinkList'
import LinkListItem from './LinkListItem'

storiesOf('Atoms/LinkList', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default', () => (
    <LinkList>
      <LinkListItem href="/">I am a ListLink!</LinkListItem>
      <LinkListItem href="/">Another one</LinkListItem>
      <LinkListItem href="/">
        A loooooong, very, very, very long link
      </LinkListItem>
      <LinkListItem href="/">A file!</LinkListItem>
    </LinkList>
  ))
