import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from './Checkbox'
import Label from '../Label'

storiesOf('Atoms/Checkbox', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('variants', () => (
    <>
      <Label htmlFor="default" label="Default">
        <Checkbox id="default" />
      </Label>
      <Label htmlFor="one" label="Primary">
        <Checkbox id="one" variant="primary" />
      </Label>
      <Label htmlFor="two" label="Secondary">
        <Checkbox id="two" variant="secondary" />
      </Label>
    </>
  ))
  .add('disabled', () => (
    <>
      <Label disabled htmlFor="four" label="Disabled">
        <Checkbox id="four" />
      </Label>
      <Label disabled htmlFor="five" label="Disabled checked">
        <Checkbox checked id="five" />
      </Label>
      <Label disabled htmlFor="five" label="Disabled checked primary">
        <Checkbox checked id="five" variant="primary" />
      </Label>
      <Label disabled htmlFor="five" label="Disabled checked secondary">
        <Checkbox checked id="five" variant="secondary" />
      </Label>
    </>
  ))
  .add('checkbox label positions', () => (
    <>
      <Label htmlFor="default1" label="Top" position="top">
        <Checkbox id="default1" />
      </Label>
      <Label htmlFor="default2" label="Right" position="right">
        <Checkbox id="default2" />
      </Label>
      <Label htmlFor="default3" label="Bottom" position="bottom">
        <Checkbox id="default3" />
      </Label>
      <Label htmlFor="default4" label="Left" position="left">
        <Checkbox id="default4" />
      </Label>
    </>
  ))
