import {
  Download,
  ChevronRight,
  Close,
  Facebook,
  Twitter,
  Linkedin,
  Email,
  Print,
} from '@datapunt/asc-assets'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import ButtonBar from '../ButtonBar'
import Icon from '../Icon'
import Button from './Button'
import IconButton from './IconButton'
import ShareButton from './ShareButton'

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
      <Button variant="secondary" hasIconLeft hasIconRight>
        <Icon size={20} color="bright">
          <Download />
        </Icon>
        Download button
        <Icon size={20} color="bright">
          <ChevronRight />
        </Icon>
      </Button>
      <Button variant="tertiary" hasIconRight>
        Download button
        <Icon size={20} color="bright">
          <ChevronRight />
        </Icon>
      </Button>
      <Button variant="primaryInverted" hasIconLeft>
        <Icon size={20} color="bright">
          <ChevronRight />
        </Icon>
        Download button
      </Button>
    </ButtonBar>
  ))
  .add('variants - disabled', () => (
    <ButtonBar>
      <Button disabled variant="primary">
        Default button
      </Button>
      <Button disabled variant="secondary" hasIconLeft hasIconRight>
        <Icon size={20} color="bright">
          <Download />
        </Icon>
        Download button
        <Icon size={20} color="bright">
          <ChevronRight />
        </Icon>
      </Button>
      <Button disabled variant="tertiary" hasIconRight>
        Download button
        <Icon size={20} color="bright">
          <ChevronRight />
        </Icon>
      </Button>
      <Button disabled variant="primaryInverted" hasIconLeft>
        <Icon size={20} color="bright">
          <ChevronRight />
        </Icon>
        Download button
      </Button>
    </ButtonBar>
  ))
  .add('with only an icon', () => (
    <>
      <Button size={30} variant="blank">
        <Icon size={20} color="bright">
          <ChevronRight />
        </Icon>
      </Button>
      <IconButton>
        <Close />
      </IconButton>
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
