import React from 'react'
import { storiesOf } from '@storybook/react'
import Select from './Select'
import Label from '../Label'

storiesOf('Atoms/Select (Dropdown)', module)
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
  .add('default', () => (
    <>
      <Label
        htmlFor="select-1"
        label="With Label"
        position="top"
        align="flex-start"
        style={{ width: '100%' }}
      >
        <Select id="select-1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4" selected>
            Option 4
          </option>
        </Select>
      </Label>

      <br />
      <br />
      <p>Without label</p>
      <Select id="select-2">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </Select>
    </>
  ))
  .add('disabled', () => (
    <>
      <Label
        htmlFor="select-1"
        label="With Label"
        position="top"
        align="flex-start"
        style={{ width: '100%' }}
        disabled
      >
        <Select id="select-1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </Select>
      </Label>
      <br />
      <br />
      <p>Without label</p>
      <Select id="select-2" disabled>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </Select>
      <br />
      <br />
      <p>Specific disabled</p>
      <Select id="select-3">
        <option value="1" disabled>
          Option 1
        </option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </Select>
    </>
  ))
  .add('error', () => (
    <>
      <Label
        htmlFor="select-1"
        label="With Label"
        position="top"
        align="flex-start"
        style={{ width: '100%' }}
      >
        <Select id="select-1" error>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </Select>
      </Label>
      <br />
      <br />
      <p>Without label</p>
      <Select id="select-2" error>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </Select>
    </>
  ))
