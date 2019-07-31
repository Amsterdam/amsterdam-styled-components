import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from './Tag'

storiesOf('Atoms/Typography/Tag', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 20px' }}>{storyFn()}</div>
  ))
  .add('default style', () => (
    <>
      <Tag>Tag one</Tag>
      <br />
      <Tag color="primary">Tag two</Tag>
      <br />
      <Tag color="secondary">Tag three</Tag>
    </>
  ))
