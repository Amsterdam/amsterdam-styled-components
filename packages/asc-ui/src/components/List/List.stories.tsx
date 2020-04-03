import React from 'react'
import List from './List'
import ListItem from './ListItem'
import Link from '../Link/Link'
import OrderedList from './OrderedList'

export default {
  title: 'Experimental/Atoms/List',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const DefaultStyle = () => (
  <List>
    <ListItem>I am a ListLink!</ListItem>
    <ListItem>Another one</ListItem>
    <ListItem>A file!</ListItem>
  </List>
)

export const DefaultStyleWithChevronLinks = () => (
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
)

export const BulletList = () => (
  <List variant="bullet">
    <ListItem>Amsterdam Noord</ListItem>
    <ListItem>Amsterdam Zuid</ListItem>
    <ListItem>Amsterdam Oost</ListItem>
    <ListItem>
      <Link href="/">Amsterdam West</Link>
    </ListItem>
  </List>
)

export const OrderedListNormal = () => (
  <OrderedList>
    <ListItem>Amsterdam Noord</ListItem>
    <ListItem>Amsterdam Zuid</ListItem>
    <ListItem>Amsterdam Oost</ListItem>
    <ListItem>
      <Link href="/">Amsterdam West</Link>
    </ListItem>
  </OrderedList>
)

OrderedListNormal.story = {
  name: 'Ordered List',
}

export const NestedOrderedList = () => (
  <OrderedList>
    <ListItem>Amsterdam Zuid</ListItem>
    <ListItem>
      Amsterdam Noord
      <OrderedList>
        <ListItem>Vogelbuurt</ListItem>
        <ListItem>Tuindorp-Oostzaan</ListItem>
      </OrderedList>
    </ListItem>
    <ListItem>Amsterdam Oost</ListItem>
    <ListItem>Amsterdam Oost</ListItem>
    <ListItem>Amsterdam Oost</ListItem>
    <ListItem>Amsterdam Oost</ListItem>
    <ListItem>Amsterdam Oost</ListItem>
    <ListItem>Amsterdam Oost</ListItem>
    <ListItem>Amsterdam Oost</ListItem>
    <ListItem>
      <Link href="/">Amsterdam West</Link>
      <OrderedList>
        <ListItem>Bos en Lommer</ListItem>
        <ListItem>
          Kolenkit
          <OrderedList>
            <ListItem>
              <Link href="/">Foo</Link>
            </ListItem>
          </OrderedList>
        </ListItem>
      </OrderedList>
    </ListItem>
  </OrderedList>
)
