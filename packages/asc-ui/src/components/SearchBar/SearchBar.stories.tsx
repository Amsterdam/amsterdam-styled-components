import React from 'react'
import { action } from '@storybook/addon-actions'
import SearchBar from './SearchBar'

export default {
  title: 'Experimental/Composed/SearchBar',

  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div style={{ padding: '40px 10px' }}>{storyFn()}</div>
    ),
  ],
}

export const DefaultState = () => (
  <SearchBar
    placeholder="Enter the search text"
    onChange={() => {
      action('Input changed')
    }}
  />
)

export const InAForm = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault()
      action('Submitted')
    }}
  >
    <SearchBar
      placeholder="Enter the search text"
      onChange={() => {
        action('Input changed')
      }}
      onClear={() => {
        action('Cleared')
      }}
    />
  </form>
)

export const ControlledState: React.FC<{}> = () => {
  const [searchText, setText] = React.useState('')

  return (
    <>
      <SearchBar
        placeholder="Enter the search text"
        onChange={(e) => {
          setText(e.currentTarget.value)
          action(`text changed: ${searchText}`)
        }}
        onClear={() => {
          setText('')
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
