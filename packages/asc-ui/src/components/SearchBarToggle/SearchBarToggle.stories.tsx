import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { css } from '@datapunt/asc-core'
import SearchBarToggle from './SearchBarToggle'

const ControlledSearchBarToggle = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <SearchBarToggle
      align="left"
      open={open}
      onOpen={setOpen}
      css={css`
        position: relative;
      `}
      onWatchValue={value => {
        action(`input value changed: ${value}`)
      }}
      onSubmit={() => {
        action('submit')
      }}
    />
  )
}

storiesOf('Composed/SearchBarToggle', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default', () => (
    <SearchBarToggle
      align="left"
      css={css`
        position: relative;
      `}
      onWatchValue={value => {
        action(`input value changed: ${value}`)
      }}
      onSubmit={() => {
        action('submit')
      }}
    />
  ))
  .add('controlled', () => <ControlledSearchBarToggle />)
