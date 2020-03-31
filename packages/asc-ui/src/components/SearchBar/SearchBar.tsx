import React from 'react'
import { Search } from '@datapunt/asc-assets'
import SearchBarStyle, { Props as SearchBarStyleProps } from './SearchBarStyle'
import TextField, { TextFieldProps } from '../TextField/TextField'
import InputContext from '../Input/InputMethodsContext'
import { InputProps } from '../Input'
import Button from '../Button'
import Icon from '../Icon'

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
}

const SearchBar: React.FC<SearchBarProps> = ({
  children,
  placeholder,
  onSubmit,
  onBlur,
  onChange,
  onFocus,
  onWatchValue,
  focusOnRender,
  value,
  label,
  hideAt,
  showAt,
  onClear,
  inputProps,
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
      // eslint-disable-next-line no-console
      console.warn(
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
      // eslint-disable-next-line no-console
      console.warn(
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
          {...{
            focusOnRender,
            inputProps,
            label,
          }}
        />
      </InputContext.Provider>
      <Button
        aria-label={placeholder || 'Zoek'}
        title={placeholder || 'Zoek'}
        type="submit"
        size={40}
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
