import React from 'react'
import { Search } from '@datapunt/asc-assets'
import SearchBarToggleStyle, {
  SearchBarToggleStyleProps,
} from './SearchBarToggleStyle'
import SearchBar from '../SearchBar'
import { InputMethods, InputProps } from '../Input'
import Toggle, { Props as ToggleProps } from '../Toggle/Toggle'
import { SearchBarProps } from '../SearchBar/SearchBar'

interface SearchBarToggleProps extends SearchBarToggleStyleProps, InputMethods {
  placeholder?: string
  label?: string
  onSubmit?: Function
  onOpen?: Function
  open?: boolean
  inputProps?: InputProps
  searchBarProps?: SearchBarProps
}

const SearchBarToggle: React.FC<SearchBarToggleProps & ToggleProps> = ({
  children,
  hideAt,
  showAt,
  searchBarProps,
  inputProps,
  ...otherProps
}) => (
  <Toggle
    as={SearchBarToggleStyle}
    {...{
      hideAt,
      showAt,
    }}
    render={false}
    iconOpen={<Search />}
    {...otherProps}
  >
    <SearchBar inputProps={inputProps} focusOnRender {...searchBarProps}>
      {children}
    </SearchBar>
  </Toggle>
)

SearchBarToggle.defaultProps = {
  placeholder: 'Search...',
}

export default SearchBarToggle
