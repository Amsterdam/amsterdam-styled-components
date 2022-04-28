import { Search } from '@amsterdam/asc-assets'
import type { InputMethods, InputProps } from '../Input'
import SearchBar from '../SearchBar'
import type { SearchBarProps } from '../SearchBar/SearchBar'
import type { Props as ToggleProps } from '../Toggle/Toggle'
import Toggle from '../Toggle/Toggle'
import type { SearchBarToggleStyleProps } from './SearchBarToggleStyle'
import SearchBarToggleStyle from './SearchBarToggleStyle'

interface SearchBarToggleProps extends SearchBarToggleStyleProps, InputMethods {
  label?: string
  onOpen?: (open: boolean) => void
  open?: boolean
  inputProps?: InputProps
  searchBarProps?: SearchBarProps
}

function SearchBarToggle({
  children,
  hideAt,
  showAt,
  searchBarProps,
  inputProps,
  ...otherProps
}: SearchBarToggleProps & ToggleProps) {
  return (
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
      <SearchBar inputProps={inputProps} {...searchBarProps} autoFocus>
        {children}
      </SearchBar>
    </Toggle>
  )
}

SearchBarToggle.defaultProps = {
  placeholder: 'Search...',
}

export default SearchBarToggle
