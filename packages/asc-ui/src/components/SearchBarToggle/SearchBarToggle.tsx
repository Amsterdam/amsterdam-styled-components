import { Search } from '@amsterdam/asc-assets'
import { FunctionComponent } from 'react'
import { InputMethods, InputProps } from '../Input'
import SearchBar from '../SearchBar'
import { SearchBarProps } from '../SearchBar/SearchBar'
import Toggle, { Props as ToggleProps } from '../Toggle/Toggle'
import SearchBarToggleStyle, {
  SearchBarToggleStyleProps,
} from './SearchBarToggleStyle'

interface SearchBarToggleProps extends SearchBarToggleStyleProps, InputMethods {
  label?: string
  onOpen?: (open: boolean) => void
  open?: boolean
  inputProps?: InputProps
  searchBarProps?: SearchBarProps
}

const SearchBarToggle: FunctionComponent<SearchBarToggleProps & ToggleProps> =
  ({ children, hideAt, showAt, searchBarProps, inputProps, ...otherProps }) => (
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

SearchBarToggle.defaultProps = {
  placeholder: 'Search...',
}

export default SearchBarToggle
