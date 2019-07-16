import { Alert, Download, ChevronRight } from '@datapunt/asc-assets'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import ButtonBar from '../ButtonBar'
import Icon from '../Icon'
import Typography from '../Typography'
import Button from './Button'

storiesOf('Atoms/Buttons', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('Default', () => (
    <ButtonBar>
      <Button onClick={action('click')}>Default button</Button>
    </ButtonBar>
  ))
  .add('Primary', () => (
    <ButtonBar>
      <Button color="primary">Primary</Button>
      <Button color="primary">
        <Icon size={24} color="bright">
          <Alert />
        </Icon>
        Primary with icon left
      </Button>
      <Button color="primary">
        Primary with icon right
        <Icon size={24} color="bright">
          <Alert />
        </Icon>
      </Button>
    </ButtonBar>
  ))
  .add('Secondary', () => (
    <ButtonBar>
      <Button color="secondary">Secondary</Button>
      <Button color="secondary">
        <Icon size={24} color="bright">
          <Alert />
        </Icon>
        Secondary with icon left
      </Button>
      <Button color="secondary">
        Secondary with icon right
        <Icon size={24} color="bright">
          <Alert />
        </Icon>
      </Button>
    </ButtonBar>
  ))
  .add('with Content', () => (
    <ButtonBar>
      <Button color="primary">
        <Icon size={20} color="bright">
          <Download />
        </Icon>
        <Typography as="span" color="bright" fontSize={16}>
          Download button
        </Typography>
        <Icon size={20} color="secondary">
          <ChevronRight />
        </Icon>
      </Button>
    </ButtonBar>
  ))
