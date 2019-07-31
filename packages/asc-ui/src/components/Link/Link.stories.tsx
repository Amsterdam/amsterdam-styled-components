import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Link from './Link'

storiesOf('Atoms/Typography/Link', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px', background: 'rgb(248,248,248,0.8)' }}>
      {storyFn()}
    </div>
  ))
  .add('default type', () => (
    <Link href="/">I am a &quot;default&quot; link without chevron icon!</Link>
  ))
  .add('default type with chevron icon', () => (
    <Link href="/" linkType="with-chevron">
      I am a default link!
    </Link>
  ))
  .add('inline type (internl link)', () => (
    <Link href="/" linkType="inline">
      I am a &quot;inline&quot; link!
    </Link>
  ))
  .add('blank type (has no style)', () => (
    <Link href="/" linkType="blank">
      I am a &quot;blank&quot; link! I have no style. I can be used for adding
      link functionality to components.
    </Link>
  ))
