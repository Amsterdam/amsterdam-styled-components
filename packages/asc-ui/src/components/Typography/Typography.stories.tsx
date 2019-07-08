import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Typography from './Typography'
import Link from './Link'

storiesOf('Atoms/Typography', module)
  .add('headings', () => (
    <>
      <Typography as="h1">Heading one</Typography>
      <Typography as="h2">Heading two</Typography>
      <Typography as="h3">Heading three</Typography>
      <Typography as="h4">Heading four</Typography>
      <Typography as="h5">Heading five</Typography>
      <Typography as="h6">Heading six</Typography>
    </>
  ))
  .add('links', () => (
    <>
      <Link href="/">I am a link!</Link>
    </>
  ))
  .add('paragraph', () => (
    <>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolor
        dolorem esse illum magni&nbsp;
        <Link href="/">I am a link!</Link>
        &nbsp; optio porro qui ratione vitae?
      </Typography>
    </>
  ))
