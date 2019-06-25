import React from 'react'
import { Search } from '@datapunt/asc-assets'
import SearchBarToggleStyle, {
  SearchBarMenuStyleProps,
} from './SearchBarToggleStyle'
import SearchBar from '../SearchBar'
import { InputMethods } from '../Input'
import Toggle, { Props as ToggleProps } from '../Toggle/Toggle'
import { SearchBarProps } from '../SearchBar/SearchBar'

interface SearchBarMenuProps extends SearchBarMenuStyleProps, InputMethods {
  css?: any
  placeholder?: string
  label?: string
  onSubmit?: Function
  onOpen?: Function
  open?: boolean
  searchBarProps?: SearchBarProps
}

const SearchBarMenu: React.FC<SearchBarMenuProps & ToggleProps> = ({
  children,
  hideAt,
  showAt,
  searchBarProps,
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
    onClick={e => {
      e.stopPropagation()
    }}
    icon={<Search />}
    {...otherProps}
  >
    <SearchBar focusOnRender {...searchBarProps}>
      {children}
    </SearchBar>
  </Toggle>
)

SearchBarMenu.defaultProps = {
  css: '',
  placeholder: 'Search...',
}

export default SearchBarMenu
