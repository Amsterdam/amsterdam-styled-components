import React from 'react'
import { storiesOf } from '@storybook/react/'
import CustomHTMLBlockStyle from './CustomHTMLBlockStyle'
import CustomHTMLBlock from './CustomHTMLBlock'

storiesOf('Atoms/CustomHTMLBlock', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default', () => (
    <CustomHTMLBlockStyle>
      <h1>Hello</h1>
      <p>I am a paragraph</p>
    </CustomHTMLBlockStyle>
  ))
  .add('with dangerouslySetInnerHTML', () => (
    <CustomHTMLBlockStyle
      dangerouslySetInnerHTML={{
        __html: `
        <h1>Hello</h1>
        <p>I am a paragraph</p>
        `,
      }}
    />
  ))
  .add('with body', () => (
    <CustomHTMLBlock
      body={`
        <h1>Hello</h1>
        <p>I am a paragraph</p>
      `}
    />
  ))
