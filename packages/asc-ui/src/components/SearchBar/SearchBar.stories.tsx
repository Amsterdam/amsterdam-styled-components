import * as React from 'react'
import { storiesOf } from '@storybook/react/'
import { action } from '@storybook/addon-actions'
import SearchBar from './SearchBar'

import SearchBarToggle from '../SearchBarToggle/SearchBarToggle'

const ControlledSearchBarStory: React.FC<{}> = () => {
  const [searchText, setText] = React.useState('')

  return (
    <>
      <SearchBar
        placeholder="Enter the search text"
        onWatchValue={value => {
          setText(value)
          action(`text changed: ${searchText}`)
        }}
        onSubmit={() => {
          action(`button clicked: ${searchText}`)
        }}
        value={searchText}
      />
      <p>
        <span>Searching for:</span>
        {searchText}
      </p>
    </>
  )
}

storiesOf('Composed/SearchBar', module)
  .addDecorator(storyFn => (
    <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
  ))
  .add('default', () => (
    <SearchBar
      placeholder="Enter the search text"
      onChange={() => {
        action('input changed')
      }}
      onSubmit={() => {
        action('input submitted')
      }}
    />
  ))
  .add('default controlled', () => <ControlledSearchBarStory />)
  .add('menu version', () => (
    <SearchBarToggle
      onWatchValue={value => {
        action(`input value changed: ${value}`)
      }}
      onSubmit={() => action('input submitted')}
    />
  ))
