import React from 'react'
// import { ReactComponent as Search } from '@datapunt/asc-assets/lib/Icons/Search.svg'
import IconButton from '../IconButton/IconButton'
import InputStyle from '../Input/InputStyle'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import SearchBarStyle from './SearchBarStyle'
import { KeyboardKeys } from '../../types'
import Input from '../Input'
import ReactIcon from "../ReactIcon/Icon"
import { SearchFill } from '@datapunt/asc-icons'

declare global {
  interface Window {
    React1: any
    React2: any
  }
}

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

ReactIcon.add(SearchFill)

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
        {/* <Search /> */}
        <ReactIcon type={SearchFill} />
      </IconButton>
      {/* <IconButton aria-label="Search" color="secondary" onClick={handleSubmit}>
        <Search />
      </IconButton> */}
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
