import React from 'react'
import SearchBarMenuButtonStyle from './SearchBarMenuButtonStyle'

const SearchBarMenuButton = ({ open, ...otherProps }: any) => {
  return <SearchBarMenuButtonStyle {...{ open }} {...otherProps} />
}
export default SearchBarMenuButton
