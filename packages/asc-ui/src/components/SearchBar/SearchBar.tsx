import React from 'react'
import { ReactComponent as Search } from '@datapunt/asc-assets/lib/Icons/Search.svg'
import IconButton from '../IconButton'
import { InputStyle } from '../../styles/components'
import IconButtonStyle from '../../styles/components/IconButtonStyle'
import SearchBarStyle from '../../styles/components/SearchBarStyle'
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

  const [state, setState] = React.useState({
    text: '',
  })

  const handleTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      text: e.target.value,
    })
    onTextChanged(state.text)
  }

  const handleSubmit = (e: React.KeyboardEvent | React.MouseEvent) => {
    e.preventDefault()
    onSearch(state.text)
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
        value={state.text}
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
