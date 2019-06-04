import React from 'react'
import Icons from '@datapunt/asc-assets'
import IconButton from '../IconButton/IconButton'
import SearchBarStyle from './SearchBarStyle'
import TextField from '../TextField/TextField'
import ReactIcon from '../ReactIcon/Icon'
import InputContext from '../Input/InputContext'
import { InputProps } from '../Input'
import { KeyboardKeys } from '../../types'

ReactIcon.add(Icons.Search)

export interface SearchBarProps extends InputProps {
  styledComponent?: any
  placeholder?: string
  label?: string
  onSubmit?: Function
}

const SearchBar: React.FC<SearchBarProps> = ({
  children,
  styledComponent,
  placeholder,
  onSubmit,
  onBlur,
  onChange,
  onFocus,
  onWatchValue,
  value,
  label,
  ...otherProps
}) => {
  const ExtendedSearchBarStyle = styledComponent
  const [inputValue, setInputValue] = React.useState(value || '')

  const onClear = () => {
    setInputValue('')
  }

  const handleOnSubmit = () => {
    if (onSubmit) {
      onSubmit(inputValue)
    }
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.Enter) {
      handleOnSubmit()
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (onChange) {
      onChange(e)
    }
  }

  // Since the user is able to clear the field, this will not trigger the onChange event,
  // so we need to manually trigger our self-made onWatchValue
  React.useEffect(() => {
    if (onWatchValue) {
      onWatchValue(inputValue)
    }
  }, [inputValue])

  return (
    <ExtendedSearchBarStyle {...otherProps}>
      <InputContext.Provider
        value={{
          onBlur,
          onFocus,
          onChange: handleOnChange,
          onKeyDown,
          placeholder,
        }}
      >
        <TextField
          srOnly
          keepFocus
          blurOnEscape
          onClear={onClear}
          label={label}
          aria-label={label}
          value={inputValue}
        />
      </InputContext.Provider>
      <IconButton
        aria-label="Search"
        color="secondary"
        onClick={handleOnSubmit}
      >
        <ReactIcon type={Icons.Search} />
      </IconButton>
      {children}
    </ExtendedSearchBarStyle>
  )
}

SearchBar.defaultProps = {
  styledComponent: SearchBarStyle,
  placeholder: 'Search...',
  value: '',
}

export default SearchBar
