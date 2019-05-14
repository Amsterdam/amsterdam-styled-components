import React from 'react'
import { ReactComponent as Search } from '@datapunt/asc-assets/lib/Icons/Search.svg'
import styled from '../../styled-components'
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
  onTextChanged: any
  onSearch?: any
}

const SearchBar: React.FC<SearchBarProps> = ({
  children,
  styledComponent,
  placeholder,
  onTextChanged,
  onSearch,
  ...otherProps
}) => {
  const Style = styled(styledComponent)``
  const inputRef = React.useRef<HTMLInputElement>(null)

  const inputValue = () =>
    inputRef && inputRef.current && inputRef.current.value

  const handleTextChanged = () => {
    console.log('handleChanged', inputValue())
    onTextChanged(inputValue())
  }

  const handleSubmit = (e: React.KeyboardEvent | React.MouseEvent) => {
    console.log('handleSubmit', inputValue())
    e.preventDefault()
    onSearch(inputValue())
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter) {
      handleSubmit(e)
    }
  }

  return (
    <Style {...otherProps}>
      <Input
        placeholder={placeholder}
        onChange={handleTextChanged}
        onKeyDown={handleKeyDown}
        inputRef={inputRef}
      />
      <IconButton aria-label="Search" color="secondary" onClick={handleSubmit}>
        <Search />
      </IconButton>
      {children}
    </Style>
  )
}

SearchBar.defaultProps = {
  styledComponent: SearchBarStyle,
  placeholder: 'Search...',
}

export default SearchBar
export { SearchBarStyle, InputStyle, IconButtonStyle }
