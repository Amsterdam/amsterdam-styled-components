import React from 'react'
import Icons from '@datapunt/asc-assets'
import ownerDocument from '../../utils/ownerDocument'
import SearchBarMenuStyle from './SearchBarMenuStyle'
import SearchBar from './SearchBar'
import IconButton from '../IconButton/IconButton'
import ReactIcon from '../ReactIcon/Icon'

interface SearchBarMenuProps {
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

interface Props extends SearchBarMenuProps {
  open?: boolean
}

const SearchBarMenu: React.FC<Props> = ({
  children,
  styledComponent,
  ...otherProps
}) => {
  const wrapper = React.useRef<HTMLDivElement>(null)

  const inputRef = React.useRef<HTMLInputElement>(null)

  const [open, setOpen] = React.useState(false)

  const onToggle = () => {
    console.log('onToggle', inputRef.current)
    console.log('TCL: onToggle -> open', open)
    setOpen(!open)
    console.log('TCL: onToggle -> open', open)
    setTimeout(() => {
      if (open && inputRef && inputRef.current) inputRef.current.focus()
    })
  }

  const onClose = () => {
    setTimeout(() => {
      const element = wrapper.current as HTMLInputElement
      if (element) {
        const currentFocus = ownerDocument(element).activeElement
        if (!element.contains(currentFocus)) {
          setOpen(false)
        }
      }
    })
  }

  return (
    <SearchBarMenuStyle
      ref={wrapper}
      onBlur={onClose}
      {...{
        open,
      }}
    >
      <IconButton
        aria-label="Search"
        onClick={() => onToggle()}
        {...otherProps}
      >
        {open ? (
          <ReactIcon type={Icons.Close} />
        ) : (
          <ReactIcon type={Icons.Search} />
        )}
      </IconButton>

      {open && (
        <SearchBar
          styledComponent={styledComponent}
          upperRef={inputRef}
          {...otherProps}
        >
          {children}
        </SearchBar>
      )}
    </SearchBarMenuStyle>
  )
}

export default SearchBarMenu
