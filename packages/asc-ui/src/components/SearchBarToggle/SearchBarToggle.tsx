import React from 'react'
import { Search } from '@datapunt/asc-assets'
import SearchBarToggleStyle, {
  SearchBarMenuStyleProps,
} from './SearchBarToggleStyle'
import SearchBar from '../SearchBar'
import { InputMethods, InputProps } from '../Input'
import Toggle, { Props as ToggleProps } from '../Toggle/Toggle'
import { SearchBarProps } from '../SearchBar/SearchBar'

interface SearchBarMenuProps extends SearchBarMenuStyleProps, InputMethods {
  css?: any
  placeholder?: string
  label?: string
  onSubmit?: Function
  onOpen?: Function
  open?: boolean
  inputProps?: InputProps
  searchBarProps?: SearchBarProps
}

const SearchBarMenu: React.FC<SearchBarMenuProps & ToggleProps> = ({
  children,
  hideAt,
  showAt,
  searchBarProps,
  inputProps,
  css,
  ...otherProps
}) => (
  <Toggle
    as={SearchBarToggleStyle}
    {...{
      hideAt,
      showAt,
      css,
    }}
    render={false}
    icon={<Search />}
    {...otherProps}
  >
    <SearchBar inputProps={inputProps} focusOnRender {...searchBarProps}>
      {children}
    </SearchBar>
  </Toggle>
)

SearchBarMenu.defaultProps = {
  css: '',
  placeholder: 'Search...',
}

export default SearchBarMenu
