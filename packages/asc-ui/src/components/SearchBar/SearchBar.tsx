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
  css?: string
  placeholder?: string
  label?: string
  onSubmit?: Function
}

const SearchBar: React.FC<SearchBarProps> = ({
  children,
  css,
  placeholder,
  onSubmit,
  onBlur,
  onChange,
  onFocus,
  onWatchValue,
  focusOnRender,
  value,
  label,
  ...otherProps
}) => {
  let inputRef: React.RefObject<HTMLInputElement> | null = null
  const [inputValue, setInputValue] = React.useState(value || '')

  const onClear = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
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

  React.useEffect(() => {
    if (typeof value !== 'undefined') {
      setInputValue(value)
    }
  }, [value])

  return (
    <SearchBarStyle {...otherProps} css={css}>
      <InputContext.Provider
        value={{
          onBlur,
          onFocus,
          onChange: handleOnChange,
          onKeyDown,
          placeholder,
          setInputRef: (ref: React.RefObject<HTMLInputElement>) => {
            inputRef = ref
          },
        }}
      >
        <TextField
          srOnly
          keepFocus
          blurOnEscape
          onClear={onClear}
          aria-label={label}
          value={inputValue}
          {...{
            focusOnRender,
            label,
          }}
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
    </SearchBarStyle>
  )
}

SearchBar.defaultProps = {
  placeholder: 'Search...',
  value: '',
}

export default SearchBar
