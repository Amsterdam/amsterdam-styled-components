import React from 'react'
import { ReactComponent as Search } from '@datapunt/asc-assets/lib/Icons/Search.svg'
import IconButton from '../IconButton/IconButton'
import InputStyle from '../Input/InputStyle'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import SearchBarStyle from './SearchBarStyle'
import { KeyboardKeys } from '../../types'
import Input from '../Input'

type SearchBarProps = {
  minWidth?: string
  maxWidth?: string
  padding?: string
  styledComponent?: any
  placeholder?: string
  onTextChanged: Function
  onSearch: Function
}

const SearchBar: React.FC<SearchBarProps> = ({
  children,
  styledComponent,
  placeholder,
  onTextChanged,
  onSearch,
  ...otherProps
}) => {
  const ExtendedSearchBarStyle = styledComponent

  const [text, setText] = React.useState('')

  const handleTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    onTextChanged(text)
  }

  const handleSubmit = (e: React.KeyboardEvent | React.MouseEvent) => {
    e.preventDefault()
    onSearch(text)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter) {
      handleSubmit(e)
    }
  }

  return (
    <ExtendedSearchBarStyle {...otherProps}>
      <Input
        aria-label={placeholder}
        placeholder={placeholder}
        onChange={handleTextChanged}
        onKeyDown={handleKeyDown}
        value={text}
      />
      <IconButton aria-label="Search" color="secondary" onClick={handleSubmit}>
        <Search />
      </IconButton>
      {children}
    </ExtendedSearchBarStyle>
  )
}

SearchBar.defaultProps = {
  styledComponent: SearchBarStyle,
  placeholder: 'Search...',
}

export default SearchBar
export { SearchBarStyle, InputStyle, IconButtonStyle }
