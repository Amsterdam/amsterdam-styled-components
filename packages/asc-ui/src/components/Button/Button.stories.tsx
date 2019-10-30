import styled from '@datapunt/asc-core'
import {
  Download,
  ChevronRight,
  ChevronLeft,
  Close,
  Facebook,
  Twitter,
  Linkedin,
  Email,
  Enlarge,
  Print,
} from '@datapunt/asc-assets'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Button from './Button'
import ShareButton from './ShareButton'

const ButtonBar = styled.div<{}>`
  display: flex;
  height: 100px;

  & > * {
    margin-right: 5px;
  }
`

storiesOf('Atoms/Buttons', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('[deprecated] variants', () => (
    <ButtonBar>
      <Button>Default button</Button>
      <Button color="primary">Primary button</Button>
      <Button color="secondary">Secondary button</Button>
    </ButtonBar>
  ))
  .add('variants', () => (
    <ButtonBar>
      <Button variant="primary">Default button</Button>
      <Button variant="application" iconLeft={<Enlarge />} iconSize={10}>
        Application button
      </Button>
      <Button
        variant="secondary"
        iconLeft={<Download />}
        iconRight={<ChevronRight />}
      >
        Download button
      </Button>
      <Button variant="secondary" taskflow>
        Taskflow button
      </Button>
      <Button variant="tertiary" iconRight={<ChevronRight />}>
        Download button
      </Button>
      <Button variant="primaryInverted" iconLeft={<ChevronRight />}>
        Download button
      </Button>
      <Button variant="textButton" iconLeft={<ChevronLeft />} iconSize={14}>
        Text button
      </Button>
    </ButtonBar>
  ))
  .add('variants - disabled', () => (
    <ButtonBar>
      <Button disabled variant="primary">
        Default button
      </Button>
      <Button
        disabled
        variant="secondary"
        iconLeft={<Download />}
        iconRight={<ChevronRight />}
      >
        Download button
      </Button>
      <Button disabled variant="tertiary" iconRight={<ChevronRight />}>
        Download button
      </Button>
      <Button disabled variant="primaryInverted" iconLeft={<ChevronRight />}>
        Download button
      </Button>
      <Button disabled variant="secondary" taskflow>
        Taskflow button
      </Button>
      <Button
        disabled
        variant="textButton"
        iconLeft={<ChevronLeft />}
        iconSize={14}
      >
        Text button
      </Button>
    </ButtonBar>
  ))
  .add('with only an icon', () => (
    <>
      <Button size={30} variant="blank" icon={<ChevronRight />} />
      <Button size={60} variant="blank" iconSize={40} icon={<Close />} />
    </>
  ))
  .add('social buttons', () => (
    <ButtonBar>
      <ShareButton hoverColor="#3b5999" iconSize={30}>
        <Facebook />
      </ShareButton>
      <ShareButton hoverColor="#55acee">
        <Twitter />
      </ShareButton>
      <ShareButton hoverColor="#0077B5">
        <Linkedin />
      </ShareButton>
      <ShareButton>
        <Email />
      </ShareButton>
      <ShareButton>
        <Print />
      </ShareButton>
    </ButtonBar>
  ))
