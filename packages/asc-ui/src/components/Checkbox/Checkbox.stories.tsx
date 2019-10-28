import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from './Checkbox'
import Label from '../Label'

storiesOf('Atoms/Checkbox', module)
  .addDecorator(storyFn => (
    <div
      style={{
        display: 'flex',
        maxWidth: 400,
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '40px 10px',
      }}
    >
      {storyFn()}
    </div>
  ))
  .add('variants', () => (
    <>
      <Label htmlFor="default" label="Default">
        <Checkbox id="default" />
      </Label>
      <Label htmlFor="primary" label="Primary">
        <Checkbox id="primary" variant="primary" />
      </Label>
      <Label htmlFor="secondary" label="Secondary">
        <Checkbox id="twsecondaryo" variant="secondary" />
      </Label>
      <Label htmlFor="tertiary" label="Tertiary">
        <Checkbox id="tertiary" variant="tertiary" />
      </Label>
      <Label htmlFor="error" label="Error">
        <Checkbox id="error" error />
      </Label>
    </>
  ))
  .add('checked', () => (
    <>
      <Label htmlFor="default" label="Default checked">
        <Checkbox id="default" checked />
      </Label>
      <Label htmlFor="primary" label="Primary checked">
        <Checkbox id="primary" variant="primary" checked />
      </Label>
      <Label htmlFor="secondary" label="Secondary checked">
        <Checkbox id="secondary" variant="secondary" checked />
      </Label>
      <Label htmlFor="tertiary" label="Tertiary checked">
        <Checkbox id="tertiary" variant="tertiary" checked />
      </Label>
    </>
  ))
  .add('disabled', () => (
    <>
      <Label disabled htmlFor="disabled" label="Disabled">
        <Checkbox id="disabled" />
      </Label>
      <Label disabled htmlFor="disabledChecked" label="Disabled checked">
        <Checkbox checked id="disabledChecked" />
      </Label>
      <Label disabled htmlFor="primary" label="Disabled checked primary">
        <Checkbox checked id="primary" variant="primary" />
      </Label>
      <Label disabled htmlFor="secondary" label="Disabled checked secondary">
        <Checkbox checked id="secondary" variant="secondary" />
      </Label>
      <Label disabled htmlFor="tertiary" label="Tertiary checked secondary">
        <Checkbox checked id="tertiary" variant="tertiary" />
      </Label>
    </>
  ))
  .add('checkbox label positions', () => (
    <>
      <Label htmlFor="top" label="Top" position="top">
        <Checkbox id="top" />
      </Label>
      <Label htmlFor="right" label="Right" position="right">
        <Checkbox id="right" />
      </Label>
      <Label htmlFor="bottom" label="Bottom" position="bottom">
        <Checkbox id="bottom" />
      </Label>
      <Label htmlFor="left" label="Left" position="left">
        <Checkbox id="left" />
      </Label>
    </>
  ))
