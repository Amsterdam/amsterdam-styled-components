import React from 'react'
import SearchBar from '../SearchBar'
import SearchBarMenu from '../SearchBar/SearchBarMenu'
import { SearchBarProps } from '../SearchBar/SearchBar'

const SearchBarWrapper: React.FC<SearchBarProps & { element: any }> = ({
  element,
  ...props
}) => {
  const [searchText, setText] = React.useState('')
  const Element = element
  return (
    <Element
      {...props}
      onChange={(text: string) => {
        setText(text)
      }}
      text={searchText}
    />
  )
}

const HeaderSearchBar = (props: SearchBarProps) => (
  <>
    <SearchBarWrapper {...props} element={SearchBar} />
    <SearchBarWrapper {...props} element={SearchBarMenu} />
  </>
)

export default HeaderSearchBar
