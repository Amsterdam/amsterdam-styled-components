import * as React from 'react'
import { storiesOf } from '@storybook/react/'
import { action } from '@storybook/addon-actions'
import { Map } from '@datapunt/asc-assets'
import SearchBar from './SearchBar'

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
  .add('default without a button', () => (
    <SearchBar
      placeholder="Enter the search text"
      onChange={() => {
        action('input changed')
      }}
      onSubmit={() => {
        action('input submitted')
      }}
      noButton
    />
  ))
  .add('default with different icon', () => (
    <SearchBar
      placeholder="Enter the search text"
      onChange={() => {
        action('input changed')
      }}
      onSubmit={() => {
        action('input submitted')
      }}
      iconComponent={<Map />}
    />
  ))
  .add('default controlled', () => <ControlledSearchBarStory />)
