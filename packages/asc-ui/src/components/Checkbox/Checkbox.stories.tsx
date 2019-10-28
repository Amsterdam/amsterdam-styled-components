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
      <Label htmlFor="one" label="Primary checked">
        <Checkbox id="one" variant="primary" checked />
      </Label>
      <Label htmlFor="two" label="Secondary checked">
        <Checkbox id="two" variant="secondary" checked />
      </Label>
      <Label htmlFor="three" label="Tertiary checked">
        <Checkbox id="three" variant="tertiary" checked />
      </Label>
    </>
  ))
  .add('disabled', () => (
    <>
      <Label disabled htmlFor="one" label="Disabled">
        <Checkbox id="one" />
      </Label>
      <Label disabled htmlFor="two" label="Disabled checked">
        <Checkbox checked id="two" />
      </Label>
      <Label disabled htmlFor="three" label="Disabled checked primary">
        <Checkbox checked id="three" variant="primary" />
      </Label>
      <Label disabled htmlFor="four" label="Disabled checked secondary">
        <Checkbox checked id="four" variant="secondary" />
      </Label>
      <Label disabled htmlFor="five" label="Tertiary checked secondary">
        <Checkbox checked id="five" variant="tertiary" />
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
