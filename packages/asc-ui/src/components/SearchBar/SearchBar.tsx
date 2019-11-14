import React from 'react'
import { Search } from '@datapunt/asc-assets'
import SearchBarStyle, { Props as SearchBarStyleProps } from './SearchBarStyle'
import TextField from '../TextField/TextField'
import InputContext from '../Input/InputMethodsContext'
import { InputProps } from '../Input'
import { KeyboardKeys } from '../../types'
import Button from '../Button'
import Icon from '../Icon'

export interface SearchBarProps extends InputProps, SearchBarStyleProps {
  placeholder?: string
  label?: string
  inputProps?: InputProps
  onSubmit?: Function
  noButton?: boolean
  iconComponent?: React.ReactElement
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
  iconComponent,
  noButton,
  inputProps,
  ...otherProps
}) => {
  let inputRef: React.RefObject<HTMLInputElement> | null = null
  const [inputValue, setInputValue] = React.useState(value || '')

  const triggerOnChange = (val: string) => {
    setInputValue(val)
    // @ts-ignore
    onChange(val)
  }

  const onClear = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
    setInputValue('')
    triggerOnChange('')
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
    triggerOnChange(e.target.value)
  }

  // Since the user is able to clear the field, this will not trigger the onChange event,
  // so we need to manually trigger our self-made onWatchValue
  React.useEffect(() => {
    if (onWatchValue) {
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
          onKeyDown,
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
          onClear={onClear}
          aria-label={label}
          value={inputValue}
          {...{
            focusOnRender,
            inputProps,
            label,
          }}
        />
      </InputContext.Provider>
      {!noButton && (
        <Button
          aria-label="Search"
          type="submit"
          size={40}
          onClick={handleOnSubmit}
          variant="secondary"
        >
          <Icon size={20}>{iconComponent}</Icon>
        </Button>
      )}
      {children}
    </SearchBarStyle>
  )
}

SearchBar.defaultProps = {
  placeholder: 'Search...',
  value: '',
  iconComponent: <Search />,
  noButton: false,
}

export default SearchBar
