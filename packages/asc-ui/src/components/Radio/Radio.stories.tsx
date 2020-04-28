import React, { createRef, useEffect } from 'react'
import Label from '../Label'
import Radio from './Radio'
import RadioGroup from './RadioGroup'
import Readme from './README.md'

export default {
  title: 'Experimental/Atoms/Radio',
  parameters: {
    notes: Readme,
  },
  decorators: [
    (storyFn: () => React.ReactNode) => (
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
    ),
  ],
}

export const Variants = () => (
  <>
    <RadioGroup name="group-1">
      <Label htmlFor="radio-1" label="Default">
        <Radio id="radio-1" checked />
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
        <Radio id="radio-4" variant="primary" checked />
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
        <Radio id="radio-7" variant="secondary" checked />
      </Label>
      <Label htmlFor="radio-8" label="Secondary">
        <Radio id="radio-8" variant="secondary" />
      </Label>
      <Label htmlFor="radio-9" label="Secondary">
        <Radio id="radio-9" variant="secondary" />
      </Label>
    </RadioGroup>
  </>
)

export const Disabled = () => (
  <>
    <RadioGroup name="group-1" disabled>
      <Label htmlFor="radio-1" label="Group Disabled">
        <Radio id="radio-1" checked />
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
)

export const Error = () => (
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
)

export const RadioGroupPositions = () => (
  <>
    <RadioGroup name="group-1" horizontal>
      <Label htmlFor="radio-1" label="Radio horizontal">
        <Radio id="radio-1" />
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
        <Radio id="radio-5" />
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
)

export const RadioLabelPositions = () => (
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
)

export const RadioWithRef = () => {
  const ref = createRef<HTMLInputElement>()

  useEffect(() => {
    const element = ref.current

    function onChange() {
      // eslint-disable-next-line no-console
      console.log('Value changed to option 2!')
    }

    if (!element) {
      return undefined
    }

    element.addEventListener('change', onChange)

    return () => {
      element.removeEventListener('change', onChange)
    }
  }, [ref])

  return (
    <RadioGroup name="group-1">
      <Label htmlFor="some-option-1" label="Option 1">
        <Radio id="some-option-1" checked />
      </Label>
      <Label htmlFor="some-option-2" label="Option 2">
        <Radio id="some-option-2" ref={ref} />
      </Label>
      <Label htmlFor="some-option-3" label="Option 3">
        <Radio id="some-option-3" />
      </Label>
    </RadioGroup>
  )
}
