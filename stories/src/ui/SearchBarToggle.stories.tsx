import { SearchBarToggle } from '@amsterdam/asc-ui'
import { action } from '@storybook/addon-actions'
import { useState } from 'react'

export function ControlledSearchBarToggle({ hasBackDrop = false }) {
  const [open, setOpen] = useState(false)
  return (
    <SearchBarToggle
      align="left"
      open={open}
      onOpen={setOpen}
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

export function Default() {
  return <ControlledSearchBarToggle />
}

export function DefaultWithBackdrop() {
  return <ControlledSearchBarToggle hasBackDrop />
}
