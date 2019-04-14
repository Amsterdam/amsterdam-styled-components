import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ReactComponent as Alert } from '@datapunt/asc-assets/lib/Icons/Alert.svg'
import Button from './Button'
import ButtonBar from '../ButtonBar'

storiesOf('Atoms/Buttons', module)
  .add('Default', () => (
    <>
      <ButtonBar>
        <Button onClick={action('click')}>Default button</Button>
      </ButtonBar>
    </>
  ))
  .add('Primary', () => (
    <>
      <ButtonBar>
        <Button color="primary">Primary</Button>
        <Button color="primary">
          <Alert />
          Primary with icon left
        </Button>
        <Button color="primary">
          Primary with icon right
          <Alert />
        </Button>
      </ButtonBar>
    </>
  ))
  .add('Secondary', () => (
    <>
      <ButtonBar>
        <Button color="secondary">Secondary</Button>
        <Button color="secondary">
          <Alert />
          Secondary with icon left
        </Button>
        <Button color="secondary">
          Secondary with icon right
          <Alert />
        </Button>
      </ButtonBar>
    </>
  ))
