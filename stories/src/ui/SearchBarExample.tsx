import { FunctionComponent, HTMLAttributes, useRef, useState } from 'react'
import { action } from '@storybook/addon-actions'
import { SearchBar } from '@amsterdam/asc-ui'

const SearchBarExample: FunctionComponent<HTMLAttributes<HTMLElement>> = () => {
  const [searchText, setText] = useState<string>('')
  const searchRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <SearchBar
        placeholder="Enter the search text"
        ref={searchRef}
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
          action(`ref found: ${searchRef.current}`)(e)
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
