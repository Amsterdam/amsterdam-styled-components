import React from 'react'
import { storiesOf } from '@storybook/react/'
import CustomHTMLBlock from './CustomHTMLBlockStyle'

storiesOf('Atoms/CustomHTMLBlock', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default', () => (
    <CustomHTMLBlock>
      <h1>Hello</h1>
      <p>I am a paragraph</p>
    </CustomHTMLBlock>
  ))
  .add('with dangerouslySetInnerHTML', () => (
    <CustomHTMLBlock
      dangerouslySetInnerHTML={{
        __html: `
        <h1>Hello</h1>
        <p>I am a paragraph</p>
        `,
      }}
    />
  ))
