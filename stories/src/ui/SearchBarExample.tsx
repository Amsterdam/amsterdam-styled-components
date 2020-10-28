import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { SearchBar } from '@amsterdam/asc-ui'

const SearchBarExample: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
  const [searchText, setText] = useState<string>('')
  return (
    <>
      <SearchBar
        placeholder="Enter the search text"
        onChange={(e) => {
          setText(e.currentTarget.value)
          action(`text changed: ${searchText}`)(e)
        }}
        onClear={() => {
          setText('')
          action(`cleared`)({})
        }}
        onSubmit={(e) => {
          action(`button clicked: ${searchText}`)(e)
        }}
        value={searchText}
      />
      <p>
        <span>Searching for: </span>
        {searchText}
      </p>
    </>
  )
}

export default SearchBarExample
