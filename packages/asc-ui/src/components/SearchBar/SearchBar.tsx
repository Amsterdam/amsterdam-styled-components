import React from 'react'
import { ReactComponent as Search } from '@datapunt/asc-assets/lib/Icons/Search.svg'
import IconButton from '../IconButton/IconButton'
import InputStyle from '../Input/InputStyle'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import SearchBarStyle from './SearchBarStyle'
import { KeyboardKeys } from '../../types'
import TextField from '../TextField/TextField'

interface SearchBarProps {
  minWidth?: string
  maxWidth?: string
  padding?: string
  styledComponent?: any
  placeholder?: string
  label?: string
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
  const inputRef = React.useRef<HTMLInputElement>(null)

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

  const handleBlur = () => {}

  const handleTextClear = () => {
    setText('')
    onTextChanged(text)
    if (inputRef && inputRef.current) inputRef.current.focus()
  }

  const handleFocus = () => {}

  return (
    <ExtendedSearchBarStyle {...otherProps}>
      <TextField
        id="search-bar-id"
        srOnly
        label={placeholder}
        aria-label={placeholder}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleTextChanged}
        onClear={handleTextClear}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        inputRef={inputRef}
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
