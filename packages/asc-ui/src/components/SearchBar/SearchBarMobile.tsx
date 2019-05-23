import React from 'react'
import Icons from '@datapunt/asc-icons'
import InputStyle from '../Input/InputStyle'
import IconButtonStyle from '../IconButton/IconButtonStyle'
import SearchBar from './SearchBar'
import ReactIcon from '../ReactIcon/Icon'
import { MenuItem, Menu } from '../..'
import SearchBarStyle from './SearchBarStyle'

ReactIcon.add(Icons.Search)

interface SearchBarProps {
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

const SearchBarMobile: React.FC<SearchBarProps> = ({
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
  styledComponent: SearchBarStyle,
  placeholder: 'Search...',
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  text: '',
}

export default SearchBarMobile
export { SearchBarStyle, InputStyle, IconButtonStyle }
