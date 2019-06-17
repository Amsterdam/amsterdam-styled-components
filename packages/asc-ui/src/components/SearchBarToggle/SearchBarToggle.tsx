import React from 'react'
import { Close, Search } from '@datapunt/asc-assets'
import ownerDocument from '../../utils/ownerDocument'
import SearchBarToggleStyle, {
  SearchBarMenuStyleProps,
} from './SearchBarToggleStyle'
import SearchBar from '../SearchBar'
import IconButton from '../IconButton/IconButton'
import { InputMethods } from '../Input'
import useActionOnEscape from '../../utils/useActionOnEscape'

interface SearchBarMenuProps extends SearchBarMenuStyleProps, InputMethods {
  css?: any
  placeholder?: string
  label?: string
  onSubmit?: Function
}

const SearchBarMenu: React.FC<SearchBarMenuProps> = ({
  children,
  css,
  hideAt,
  showAt,
  ...otherProps
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [open, setOpen] = React.useState(false)
  const { onKeyDown } = useActionOnEscape(() => setOpen(false))

  const onBlurHandler = () => {
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
        hideAt,
        showAt,
      }}
      onClick={e => {
        e.stopPropagation()
      }}
      onBlur={onBlurHandler}
    >
      <IconButton
        type="button"
        aria-label="Search"
        onClick={() => {
          setOpen(!open)
        }}
        iconSize={open ? 16 : 20}
      >
        {open ? <Close /> : <Search />}
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
