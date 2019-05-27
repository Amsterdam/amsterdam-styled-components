import React from 'react'
import Icons from '@datapunt/asc-assets'
import IconButton from '../IconButton/IconButton'
import InputStyle from '../Input/InputStyle'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import SearchBarStyle from './SearchBarStyle'
import { KeyboardKeys } from '../../types'
import TextField from '../TextField/TextField'
import ReactIcon from '../ReactIcon/Icon'

ReactIcon.add(Icons.Search)

interface SearchBarProps {
  styledComponent?: any
  placeholder?: string
  label?: string
  onTextChanged: Function
  onSearch: Function
  onBlur?: Function
  onFocus?: Function
  onKeyDown?: Function
  text?: string
}

const SearchBar: React.FC<SearchBarProps> = ({
  children,
  styledComponent,
  placeholder,
  onTextChanged,
  onSearch,
  onBlur,
  onFocus,
  onKeyDown,
  text,
  ...otherProps
}) => {
  const ExtendedSearchBarStyle = styledComponent
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTextChanged(e.target.value)
  }

  const handleSubmit = (e: React.KeyboardEvent | React.MouseEvent) => {
    e.preventDefault()
    onSearch(text)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onKeyDown) onKeyDown(e, inputRef.current)

    if (e.key === KeyboardKeys.Enter) {
      handleSubmit(e)
    }
  }

  const handleTextClear = () => {
    if (inputRef && inputRef.current) inputRef.current.focus()
    onTextChanged('')
  }

  return (
    <ExtendedSearchBarStyle {...otherProps}>
      <TextField
        id="search-bar-id"
        srOnly
        label={placeholder}
        aria-label={placeholder}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={handleTextChanged}
        onClear={handleTextClear}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
        inputRef={inputRef}
        value={text || ''}
      />
      <IconButton aria-label="Search" color="secondary" onClick={handleSubmit}>
        <ReactIcon type={Icons.Search} />
      </IconButton>
      {children}
    </ExtendedSearchBarStyle>
  )
}

SearchBar.defaultProps = {
  styledComponent: SearchBarStyle,
  placeholder: 'Search...',
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  text: '',
}

export default SearchBar
export { SearchBarStyle, InputStyle, IconButtonStyle }
