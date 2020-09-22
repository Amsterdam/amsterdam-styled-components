import { SearchBarToggle } from '@amsterdam/asc-ui'
import { action } from '@storybook/addon-actions'
import React from 'react'

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
  title: 'UI/SearchBarToggle',
}

export const Default = () => <ControlledSearchBarToggle />

export const DefaultWithBackdrop = () => (
  <ControlledSearchBarToggle hasBackDrop />
)
