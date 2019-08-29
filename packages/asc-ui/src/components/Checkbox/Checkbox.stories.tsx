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
      <Label disabled htmlFor="disabled_1" label="Disabled">
        <Checkbox id="disabled_1" />
      </Label>
      <Label disabled htmlFor="disabled_2" label="Disabled checked">
        <Checkbox checked id="disabled_2" />
      </Label>
      <Label disabled htmlFor="disabled_3" label="Disabled checked primary">
        <Checkbox checked id="disabled_3" variant="primary" />
      </Label>
      <Label disabled htmlFor="disabled_4" label="Disabled checked secondary">
        <Checkbox checked id="disabled_4" variant="secondary" />
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
