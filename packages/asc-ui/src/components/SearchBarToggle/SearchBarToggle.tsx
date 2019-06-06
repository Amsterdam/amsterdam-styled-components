import React from 'react'
import Icons from '@datapunt/asc-assets'
import ownerDocument from '../../utils/ownerDocument'
import SearchBarToggleStyle from './SearchBarToggleStyle'
import SearchBar from '../SearchBar'
import IconButton from '../IconButton/IconButton'
import ReactIcon from '../ReactIcon/Icon'
import { InputMethods } from '../Input'
import useActionOnEscape from '../../utils/useActionOnEscape'

interface SearchBarMenuProps extends InputMethods {
  css?: any
  placeholder?: string
  label?: string
  onSubmit?: Function
}

interface Props extends SearchBarMenuProps {
  open?: boolean
}
const SearchBarMenu: React.FC<Props> = ({ children, css, ...otherProps }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [open, setOpen] = React.useState(false)
  const { onKeyDown } = useActionOnEscape(() => setOpen(false))

  const onClose = () => {
    setTimeout(() => {
      const element = ref.current as HTMLInputElement
      if (element) {
        const currentFocus = ownerDocument(element).activeElement
        if (!element.contains(currentFocus)) {
          setOpen(false)
        }
      }
    })
  }

  return (
    <SearchBarToggleStyle
      {...{
        onKeyDown,
        css,
        ref,
        open,
      }}
      onBlur={onClose}
    >
      <IconButton
        type="button"
        aria-label="Search"
        onClick={() => {
          setOpen(!open)
        }}
        iconSize={open ? 16 : 20}
      >
        <ReactIcon type={open ? Icons.Close : Icons.Search} />
      </IconButton>

      {open && (
        <SearchBar focusOnRender {...otherProps}>
          {children}
        </SearchBar>
      )}
    </SearchBarToggleStyle>
  )
}

SearchBarMenu.defaultProps = {
  css: '',
  placeholder: 'Search...',
}

export default SearchBarMenu
