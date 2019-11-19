import React from 'react'
import { storiesOf } from '@storybook/react'
import Radio from './Radio'
import RadioGroup from './RadioGroup'
import Label from '../Label'

storiesOf('Atoms/Radio', module)
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
      <RadioGroup name="group-1">
        <Label htmlFor="radio-1" label="Default">
          <Radio id="radio-1" defaultChecked />
        </Label>
        <Label htmlFor="radio-2" label="Default">
          <Radio id="radio-2" />
        </Label>
        <Label htmlFor="radio-3" label="Default">
          <Radio id="radio-3" />
        </Label>
      </RadioGroup>
      <br />
      <br />
      <RadioGroup name="group-2">
        <Label htmlFor="radio-4" label="Primary">
          <Radio id="radio-4" variant="primary" defaultChecked />
        </Label>
        <Label htmlFor="radio-5" label="Primary">
          <Radio id="radio-5" variant="primary" />
        </Label>
        <Label htmlFor="radio-6" label="Primary">
          <Radio id="radio-6" variant="primary" />
        </Label>
      </RadioGroup>
      <br />
      <br />
      <RadioGroup name="group-3">
        <Label htmlFor="radio-7" label="Secondary">
          <Radio id="radio-7" variant="secondary" defaultChecked />
        </Label>
        <Label htmlFor="radio-8" label="Secondary">
          <Radio id="radio-8" variant="secondary" />
        </Label>
        <Label htmlFor="radio-9" label="Secondary">
          <Radio id="radio-9" variant="secondary" />
        </Label>
      </RadioGroup>
    </>
  ))
  .add('disabled', () => (
    <>
      <RadioGroup name="group-1" disabled>
        <Label htmlFor="radio-1" label="Group Disabled">
          <Radio id="radio-1" />
        </Label>
        <Label htmlFor="radio-2" label="Group Disabled">
          <Radio id="radio-2" />
        </Label>
        <Label htmlFor="radio-3" label="Group Disabled">
          <Radio id="radio-3" />
        </Label>
        <Label htmlFor="radio-4" label="Group Disabled">
          <Radio id="radio-4" />
        </Label>
      </RadioGroup>
      <br />
      <br />
      <RadioGroup name="group-2">
        <Label htmlFor="radio-5" label="Enabled">
          <Radio id="radio-5" />
        </Label>
        <Label htmlFor="radio-6" label="Enabled">
          <Radio id="radio-6" />
        </Label>
        <Label htmlFor="radio-7" label="Enabled">
          <Radio id="radio-7" />
        </Label>
        <Label htmlFor="radio-8" label="Single Disabled" disabled>
          <Radio id="radio-8" />
        </Label>
      </RadioGroup>
    </>
  ))
  .add('error', () => (
    <>
      <RadioGroup name="group-1" error>
        <Label htmlFor="radio-1" label="Error">
          <Radio id="radio-1" />
        </Label>
        <Label htmlFor="radio-2" label="Error">
          <Radio id="radio-2" />
        </Label>
        <Label htmlFor="radio-3" label="Error">
          <Radio id="radio-3" />
        </Label>
        <Label htmlFor="radio-4" label="Error">
          <Radio id="radio-4" />
        </Label>
      </RadioGroup>
    </>
  ))
  .add('radio group position', () => (
    <>
      <RadioGroup name="group-1" horizontal>
        <Label htmlFor="radio-1" label="Radio horizontal">
          <Radio id="radio-1" defaultChecked />
        </Label>
        <Label htmlFor="radio-2" label="Radio horizontal">
          <Radio id="radio-2" />
        </Label>
        <Label htmlFor="radio-3" label="Radio horizontal">
          <Radio id="radio-3" />
        </Label>
        <Label htmlFor="radio-4" label="Radio horizontal">
          <Radio id="radio-4" />
        </Label>
      </RadioGroup>
      <br />
      <br />
      <RadioGroup name="group-2">
        <Label htmlFor="radio-5" label="Radio vertical">
          <Radio id="radio-5" defaultChecked />
        </Label>
        <Label htmlFor="radio-6" label="Radio vertical">
          <Radio id="radio-6" />
        </Label>
        <Label htmlFor="radio-7" label="Radio vertical">
          <Radio id="radio-7" />
        </Label>
        <Label htmlFor="radio-8" label="Radio vertical">
          <Radio id="radio-8" />
        </Label>
      </RadioGroup>
    </>
  ))
  .add('radio label positions', () => (
    <>
      <RadioGroup name="group-1">
        <Label htmlFor="top" label="Top" position="top">
          <Radio id="top" />
        </Label>
        <Label htmlFor="right" label="Right" position="right">
          <Radio id="right" />
        </Label>
        <Label htmlFor="bottom" label="Bottom" position="bottom">
          <Radio id="bottom" />
        </Label>
        <Label htmlFor="left" label="Left" position="left">
          <Radio id="left" />
        </Label>
      </RadioGroup>
    </>
  ))
