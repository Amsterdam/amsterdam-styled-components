import React from 'react'
import { ReactComponent as Search } from '@datapunt/asc-assets/lib/Icons/Search.svg'
import styled from '../../styled-components'
import IconButton from '../IconButton'
import { InputStyle } from '../../styles/components'
import IconButtonStyle from '../../styles/components/IconButtonStyle'
import { svgFill } from '../../styles/utils'
import { KeyboardKeys } from '../../types'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      styledComponent: any
    }
  }
}

type InputProps = {
  placeholder?: string
  onChange: any
  onKeyDown: any
  inputRef: any
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  inputRef,
  ...otherProps
}) => {
  return (
    <InputStyle
      placeholder={placeholder}
      onChange={onChange}
      ref={inputRef}
      {...otherProps}
    />
  )
}

const SearchBarStyle = styled.div`
  display: flex;

  ${InputStyle} {
    width: 500px;
  }

  ${IconButtonStyle} {
    margin-left: 5px;
    padding: 10px;
    width: 40px;
    height: 40px;
    & svg {
      ${svgFill('tint', 'level1')};
    }
  }
`

type SearchBarProps = {
  minWidth?: string
  maxWidth?: string
  padding?: string
  styledComponent?: any
  placeholder?: string
  onTextChanged: any
  onSubmit?: any
}

const SearchBar: React.FC<SearchBarProps> = ({
  children,
  styledComponent,
  placeholder,
  onTextChanged,
  onSubmit,
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

  const handleSubmit = () => {
    console.log('handleSubmit', inputValue())
    onSubmit(inputValue())
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter) {
      handleSubmit()
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
