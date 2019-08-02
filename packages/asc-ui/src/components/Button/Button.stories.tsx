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
import { action } from '@storybook/addon-actions'
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
  .add('basic', () => (
    <ButtonBar>
      <Button onClick={action('click')}>Default button</Button>
    </ButtonBar>
  ))
  .add('variants', () => (
    <ButtonBar>
      <Button variant="primary" onClick={action('click')}>
        Default button
      </Button>
      <Button variant="secondary">
        <Icon size={20} color="bright">
          <Download />
        </Icon>
        Download button
        <Icon size={20} color="bright">
          <ChevronRight />
        </Icon>
      </Button>
      <Button variant="tertiary">
        Download button
        <Icon size={20} color="bright">
          <ChevronRight />
        </Icon>
      </Button>
      <Button variant="primaryInverted">
        <Icon size={20} color="bright">
          <ChevronRight />
        </Icon>
        Download button
      </Button>
    </ButtonBar>
  ))
  .add('variants - disabled', () => (
    <ButtonBar>
      <Button disabled variant="primary" onClick={action('click')}>
        Default button
      </Button>
      <Button disabled variant="secondary">
        <Icon size={20} color="bright">
          <Download />
        </Icon>
        Download button
        <Icon size={20} color="bright">
          <ChevronRight />
        </Icon>
      </Button>
      <Button disabled variant="tertiary">
        Download button
        <Icon size={20} color="bright">
          <ChevronRight />
        </Icon>
      </Button>
      <Button disabled variant="primaryInverted">
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
