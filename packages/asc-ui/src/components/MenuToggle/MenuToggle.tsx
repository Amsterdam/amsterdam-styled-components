import {
  ButtonHTMLAttributes,
  ElementType,
  FunctionComponent,
  KeyboardEvent,
  HTMLAttributes,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import MenuToggleStyle, {
  Props as MenuToggleStyleProps,
} from './MenuToggleStyle'
import ownerDocument from '../../utils/ownerDocument'
import usePassPropsToChildren from '../../utils/hooks/usePassPropsToChildren'
import useActionOnEscape from '../../utils/hooks/useActionOnEscape'
import ToggleButton, {
  Props as ToggleButtonProps,
} from '../Button/ToggleButton/ToggleButton'
import BackDrop, { Props as BackDropProps } from '../BackDrop/BackDrop'

export type MenuToggleHandlerProps = {
  as?: ElementType
} & ToggleButtonProps &
  HTMLAttributes<HTMLElement>

export type Props = {
  render?: boolean
  ariaLabel?: string
  onOpen?: (open: boolean) => void
  ToggleHandler?: FunctionComponent<
    ToggleButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
  >
  rotateOnOpen?: number
  as?: ElementType
} & MenuToggleStyleProps &
  MenuToggleHandlerProps &
  BackDropProps

// Todo: refactor this to Collapse component https://github.com/Amsterdam/amsterdam-styled-components/issues/379
const MenuToggle: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({
  children: childrenProps,
  onClick,
  open: openProp,
  onKeyDown,
  onOpen,
  css,
  render,
  iconOpen,
  iconClose,
  ToggleHandler,
  title,
  hasBackDrop,
  backdropOpacity,
  zIndexOffset,
  ariaLabel,
  ...otherProps
}) => {
  const [open, setOpen] = useState(false)

  const handleOnOpen = useCallback(
    (openParam: boolean) => {
      setOpen(openParam)

      if (onOpen) {
        onOpen(openParam)
      }
    },
    // Empty dependency array prevents an infinite loop if the parent rerenders
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const { onKeyDown: onKeyDownHook } = useActionOnEscape(() =>
    handleOnOpen(false),
  )
  const ref = useRef<HTMLDivElement>(null!)

  const handleOnBlur = () => {
    setTimeout(() => {
      const element = ref.current
      if (element) {
        const currentFocus = ownerDocument(element).activeElement
        if (!element.contains(currentFocus)) {
          handleOnOpen(false)
        }
      }
    })
  }

  const handleOnKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    onKeyDownHook(e)
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  const handleOnClick = (e: MouseEvent<HTMLElement>) => {
    handleOnOpen(!open)

    if (onClick) {
      onClick(e)
    }
  }

  const { children } = usePassPropsToChildren(childrenProps, {
    'aria-hidden': !open,
  })

  // Useful if parent needs to take over control the isOpen state
  useEffect(() => {
    if (typeof openProp !== 'undefined') {
      handleOnOpen(openProp)
    }
  }, [handleOnOpen, openProp])

  const conditionalRenderedChildren = open ? children : null

  return (
    <MenuToggleStyle
      ref={ref}
      css={css}
      onBlur={handleOnBlur}
      onKeyDown={handleOnKeyDown}
      hasBackDrop={hasBackDrop}
      {...otherProps}
      tabIndex={-1} // This will enable the onblur event for this div element on all browsers
    >
      {ToggleHandler && (
        <ToggleHandler
          {...{
            open,
            iconClose,
            iconOpen,
            onClick: handleOnClick,
            title,
            hasBackDrop,
          }}
          {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
          type="button"
        />
      )}
      {render ? children : conditionalRenderedChildren}
      {hasBackDrop && open && (
        <BackDrop
          onClick={handleOnClick}
          zIndexOffset={zIndexOffset}
          backdropOpacity={backdropOpacity}
        />
      )}
    </MenuToggleStyle>
  )
}

MenuToggle.defaultProps = {
  render: true,
  ToggleHandler: ToggleButton,
}

export default MenuToggle
