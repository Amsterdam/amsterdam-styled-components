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
      <RadioGroup name="group">
        <Label htmlFor="radio-1" label="Radio 1">
          <Radio id="radio-1" />
        </Label>
        <Label htmlFor="radio-2" label="Radio 2">
          <Radio id="radio-2" />
        </Label>
      </RadioGroup>
    </>
  ))
  .add('checked', () => (
    <>
      <RadioGroup>
        <Label htmlFor="radio-1" label="Checked">
          <Radio id="radio-1" name="group" defaultChecked />
        </Label>
        <Label htmlFor="radio-2" label="Unchecked">
          <Radio id="radio-2" name="group" />
        </Label>
      </RadioGroup>
    </>
  ))
  .add('disabled', () => (
    <>
      <RadioGroup disabled>
        <Label htmlFor="radio-1" label="Disabled 1">
          <Radio id="radio-1" name="group" />
        </Label>
        <Label htmlFor="radio-2" label="Disabled 2">
          <Radio id="radio-2" name="group" />
        </Label>
      </RadioGroup>
    </>
  ))
  .add('radio label positions', () => (
    <>
      <Label htmlFor="top" label="Top" position="top">
        <Radio name="group" id="top" />
      </Label>
      <Label htmlFor="right" label="Right" position="right">
        <Radio name="group" id="right" />
      </Label>
      <Label htmlFor="bottom" label="Bottom" position="bottom">
        <Radio name="group" id="bottom" />
      </Label>
      <Label htmlFor="left" label="Left" position="left">
        <Radio name="group" id="left" />
      </Label>
    </>
  ))
