import { Search } from '@amsterdam/asc-assets'
import React, { FunctionComponent } from 'react'
import { deprecatedWarning } from '../../utils'
import Button from '../Button'
import Icon from '../Icon'
import { InputProps } from '../Input'
import InputContext from '../Input/InputMethodsContext'
import TextField, { TextFieldProps } from '../TextField/TextField'
import SearchBarStyle, { Props as SearchBarStyleProps } from './SearchBarStyle'

export interface SearchBarProps extends TextFieldProps, SearchBarStyleProps {
  label?: string
  inputProps?: InputProps
  /**
   * @deprecated, use onChange in combo with onClear instead
   * @param value
   */
  onWatchValue?: (value: string) => void
  /**
   * @deprecated, wrap this component inside a <form onSubmit={() => ...}> instead
   * @param value
   */
  onSubmit?: (e: React.FormEvent) => void
  autoFocus?: boolean
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  children,
  placeholder,
  onSubmit,
  onBlur,
  onChange,
  onFocus,
  onWatchValue,
  value,
  label,
  hideAt,
  showAt,
  onClear,
  inputProps,
  autoFocus,
  ...otherProps
}) => {
  let inputRef: React.RefObject<HTMLInputElement> | null = null
  const [inputValue, setInputValue] = React.useState(value || '')

  const handelOnClear = () => {
    setInputValue('')
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }

    if (onClear) {
      onClear()
    }
  }

  const handleOnSubmit = (e: React.FormEvent) => {
    if (onSubmit) {
      deprecatedWarning(
        `onSubmit is about to be deprecated, wrap this component inside a <form onSubmit={...} /> instead`,
      )
      onSubmit(e)
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)

    if (onChange) {
      onChange(e)
    }
  }

  React.useEffect(() => {
    if (onWatchValue) {
      deprecatedWarning(
        'onWatchValue is about to be deprecated. Use onChange in combo with onClear instead',
      )
      // @ts-ignore
      onWatchValue(inputValue)
    }
  }, [inputValue, onWatchValue])

  React.useEffect(() => {
    if (typeof value !== 'undefined') {
      setInputValue(value)
    }
  }, [value, setInputValue])

  return (
    <SearchBarStyle {...otherProps} {...{ hideAt, showAt }}>
      <InputContext.Provider
        value={{
          onBlur,
          onFocus,
          onChange: handleOnChange,
          placeholder,
          setInputRef: (ref: React.RefObject<HTMLInputElement>) => {
            inputRef = ref
          },
          ...inputProps,
        }}
      >
        <TextField
          srOnly
          keepFocus
          blurOnEscape
          onClear={handelOnClear}
          aria-label={label}
          id={inputProps?.id}
          value={inputValue}
          autoFocus={autoFocus}
          {...{
            inputProps,
            label,
          }}
        />
      </InputContext.Provider>
      <Button
        aria-label={placeholder || 'Zoek'}
        title={placeholder || 'Zoek'}
        type="submit"
        size={36}
        onClick={handleOnSubmit}
        variant="secondary"
      >
        <Icon size={20}>
          <Search />
        </Icon>
      </Button>
      {children}
    </SearchBarStyle>
  )
}

SearchBar.defaultProps = {
  placeholder: 'Search...',
  value: '',
}

export default SearchBar
