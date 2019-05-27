import React from 'react'
import Icons from '@datapunt/asc-assets'
import InputStyle from '../Input/InputStyle'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import SearchBar from './SearchBar'
import ReactIcon from '../ReactIcon/Icon'
import { MenuItem, Menu } from '../..'
import SearchBarMobileStyle from './SearchBarMobileStyle'

ReactIcon.add(Icons.Search)

interface SearchBarMobileProps {
  styledComponent?: any
  placeholder?: string
  label?: string
  onTextChanged: Function
  onSearch: Function
  onBlur?: Function
  onFocus?: Function
  onKeyDown?: Function
  text?: string
}

const SearchBarMobile: React.FC<SearchBarMobileProps> = ({
  children,
  styledComponent,
  ...otherProps
}) => {
  return (
    <Menu icon={<ReactIcon type={Icons.Search} />} mobile>
      <MenuItem>
        <SearchBar styledComponent={styledComponent} {...otherProps}>
          {children}
        </SearchBar>
      </MenuItem>
    </Menu>
  )
}

SearchBarMobile.defaultProps = {
  styledComponent: SearchBarMobileStyle,
  placeholder: 'Search...',
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  text: '',
}

export default SearchBarMobile
export { SearchBarMobileStyle, InputStyle, IconButtonStyle }
