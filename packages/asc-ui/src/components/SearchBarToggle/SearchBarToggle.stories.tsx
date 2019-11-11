import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import SearchBarToggle from './SearchBarToggle'

const ControlledSearchBarToggle = ({ hasBackDrop = false }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <SearchBarToggle
      align="left"
      open={open}
      onOpen={setOpen}
      onWatchValue={value => {
        action(`input value changed: ${value}`)
      }}
      onSubmit={() => {
        action('submit')
      }}
      hasBackDrop={hasBackDrop}
    />
  )
}

storiesOf('Composed/SearchBarToggle', module)
  .addDecorator(storyFn => (
    <div style={{ margin: '40px 10px', position: 'relative' }}>{storyFn()}</div>
  ))
  .add('default', () => <ControlledSearchBarToggle />)
  .add('default with backdrop', () => <ControlledSearchBarToggle hasBackDrop />)
