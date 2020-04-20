import React from 'react'
import { Checkbox } from '../Checkbox'
import Input from '../Input'
import Label from '../Label'
import Radio from '../Radio'
import RadioGroup from '../Radio/RadioGroup'
import Select from '../Select'
import ErrorMessage from './ErrorMessage'
import Readme from './README.md'

export default {
  title: 'Experimental/Atoms/ErrorMessage',
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

export const Default = () => (
  <ErrorMessage message="This is an incorrect value" />
)

export const WithInput = () => (
  <>
    <Input error />
    <ErrorMessage message="This a required field" />
  </>
)

export const WithRadio = () => (
  <>
    <RadioGroup name="group-1" error>
      <Label htmlFor="radio-1" label="Windows">
        <Radio id="radio-1" />
      </Label>
      <Label htmlFor="radio-2" label="MacOS">
        <Radio id="radio-2" />
      </Label>
      <Label htmlFor="radio-3" label="Linux">
        <Radio id="radio-3" />
      </Label>
    </RadioGroup>
    <ErrorMessage message="This a required field" />
  </>
)

export const WithCheckbox = () => (
  <>
    <Label htmlFor="error" label="Accept terms">
      <Checkbox id="error" error />
    </Label>
    <ErrorMessage message="This a required field" />
  </>
)

export const WithSelect = () => (
  <>
    <Select id="select-1" error>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </Select>
    <ErrorMessage message="This a required field" />
  </>
)
