import React from 'react'
import { action } from '@storybook/addon-actions'
import SearchBarToggle from './SearchBarToggle'

const ControlledSearchBarToggle = ({ hasBackDrop = false }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <SearchBarToggle
      align="left"
      open={open}
      onOpen={setOpen}
      onWatchValue={(value) => {
        action(`input value changed: ${value}`)
      }}
      onSubmit={() => {
        action('submit')
      }}
      hasBackDrop={hasBackDrop}
    />
  )
}

export default {
  title: 'Experimental/Composed/SearchBarToggle',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ margin: '40px 10px', position: 'relative' }}>
        {storyFn()}
      </div>
    ),
  ],
}

export const Default = () => <ControlledSearchBarToggle />

export const DefaultWithBackdrop = () => (
  <ControlledSearchBarToggle hasBackDrop />
)
