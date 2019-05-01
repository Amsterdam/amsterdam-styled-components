import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Typography from './Typography'

storiesOf('Atoms/Typography', module)
  .add('headings', () => (
    <>
      <Typography element="h1">Heading one</Typography>
      <Typography element="h2">Heading two</Typography>
      <Typography element="h3">Heading three</Typography>
      <Typography element="h4">Heading four</Typography>
      <Typography element="h5">Heading five</Typography>
      <Typography element="h6">Heading six</Typography>
    </>
  ))
  .add('links', () => (
    <>
      <Typography element="a" href="/">
        I am a link!
      </Typography>
    </>
  ))
  .add('paragraph', () => (
    <>
      <Typography element="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolor
        dolorem esse illum magni&nbsp;
        <Typography element="a" href="/">
          I am a link!
        </Typography>
        &nbsp; optio porro qui ratione vitae?
      </Typography>
    </>
  ))
