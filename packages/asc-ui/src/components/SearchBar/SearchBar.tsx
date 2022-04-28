import { Search } from '@amsterdam/asc-assets'
import type { ChangeEvent, FormEvent, RefObject } from 'react'
import { useEffect, useState, useMemo } from 'react'
import { deprecatedWarning } from '../../utils'
import Button from '../Button'
import Icon from '../Icon'
import type { InputProps } from '../Input'
import InputContext from '../Input/InputMethodsContext'
import type { TextFieldProps } from '../TextField/TextField'
import TextField from '../TextField/TextField'
import type { Props as SearchBarStyleProps } from './SearchBarStyle'
import SearchBarStyle from './SearchBarStyle'

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
  onSubmit?: (e: FormEvent) => void
  autoFocus?: boolean
}

function SearchBar({
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
}: SearchBarProps) {
  let inputRef: RefObject<HTMLInputElement> | null = null
  const [inputValue, setInputValue] = useState(value || '')

  const handelOnClear = () => {
    setInputValue('')
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }

    if (onClear) {
      onClear()
    }
  }

  const handleOnSubmit = (e: FormEvent) => {
    if (onSubmit) {
      deprecatedWarning(
        `onSubmit is about to be deprecated, wrap this component inside a <form onSubmit={...} /> instead`,
      )
      onSubmit(e)
    }
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)

    if (onChange) {
      onChange(e)
    }
  }

  useEffect(() => {
    if (onWatchValue) {
      deprecatedWarning(
        'onWatchValue is about to be deprecated. Use onChange in combo with onClear instead',
      )
      // @ts-ignore
      onWatchValue(inputValue)
    }
  }, [inputValue, onWatchValue])

  useEffect(() => {
    if (typeof value !== 'undefined') {
      setInputValue(value)
    }
  }, [value, setInputValue])

  const contextValue = useMemo(
    () => ({
      onBlur,
      onFocus,
      onChange: handleOnChange,
      placeholder,
      setInputRef: (ref: RefObject<HTMLInputElement>) => {
        inputRef = ref
      },
      ...inputProps,
    }),
    [],
  )

  return (
    <SearchBarStyle {...otherProps} {...{ hideAt, showAt }}>
      <InputContext.Provider value={contextValue}>
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
