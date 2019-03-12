import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as Alert } from '@datapunt/asc-assets/lib/Icons/Alert.svg'
import { ButtonBar, Button } from '../..'

storiesOf('Button', module)
  .add('Default', () => (
    <>
      <ButtonBar>
        <Button>Default button</Button>
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
