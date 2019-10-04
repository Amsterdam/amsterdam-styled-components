import React from 'react'
import { Search } from '@datapunt/asc-assets'
import SearchBarToggleStyle, {
  SearchBarToggleStyleProps,
} from './SearchBarToggleStyle'
import SearchBar from '../SearchBar'
import { InputMethods, InputProps } from '../Input'
import Toggle, { Props as ToggleProps } from '../Toggle/Toggle'
import { SearchBarProps } from '../SearchBar/SearchBar'
import { CustomCssPropsInterface } from '../../utils'

interface SearchBarToggleProps
  extends SearchBarToggleStyleProps,
    InputMethods,
    CustomCssPropsInterface {
  placeholder?: string
  label?: string
  onSubmit?: Function
  onOpen?: Function
  open?: boolean
  inputProps?: InputProps
  searchBarProps?: SearchBarProps
  hasBackDrop?: boolean
}

const SearchBarToggle: React.FC<SearchBarToggleProps & ToggleProps> = ({
  children,
  hideAt,
  showAt,
  searchBarProps,
  inputProps,
  css,
  hasBackDrop,
  ...otherProps
}) => (
  <Toggle
    as={SearchBarToggleStyle}
    {...{
      hideAt,
      showAt,
      css,
      hasBackDrop,
    }}
    render={false}
    iconOpen={<Search />}
    {...otherProps}
  >
    <SearchBar
      inputProps={inputProps}
      focusOnRender
      {...searchBarProps}
      hasBackDrop={hasBackDrop}
    >
      {children}
    </SearchBar>
  </Toggle>
)

SearchBarToggle.defaultProps = {
  css: '',
  placeholder: 'Search...',
}

export default SearchBarToggle
