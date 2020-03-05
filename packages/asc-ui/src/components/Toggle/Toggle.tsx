import React, { HTMLAttributes } from 'react'
import ToggleStyle, { Props as ToggleStyleProps } from './ToggleStyle'
import ownerDocument from '../../utils/ownerDocument'
import usePassPropsToChildren from '../../utils/hooks/usePassPropsToChildren'
import useActionOnEscape from '../../utils/hooks/useActionOnEscape'
import ToggleButton, {
  Props as ToggleButtonProps,
} from '../Button/ToggleButton/ToggleButton'
import BackDrop from '../BackDrop/BackDrop'

export type ToggleHandlerProps = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
} & ToggleButtonProps &
  React.HTMLAttributes<HTMLElement>

export type Props = {
  render?: boolean
  onOpen?: Function
  ToggleHandler?: React.FC<
    ToggleButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
  >
  rotateOnOpen?: number
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
} & ToggleStyleProps &
  ToggleHandlerProps

const Toggle: React.FC<Props & HTMLAttributes<HTMLDivElement>> = ({
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
  ...otherProps
}) => {
  const [open, setOpen] = React.useState(false)

  const handleOnOpen = React.useCallback(
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
  const ref = React.useRef<HTMLDivElement>(null!)

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

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    onKeyDownHook(e)
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  const handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    handleOnOpen(!open)

    if (onClick) {
      onClick(e)
    }
  }

  const { children } = usePassPropsToChildren(childrenProps, {
    'aria-hidden': !open,
  })

  // Useful if parent needs to take over control the open state
  React.useEffect(() => {
    if (typeof openProp !== 'undefined') {
      handleOnOpen(openProp)
    }
  }, [handleOnOpen, openProp])

  const conditionalRenderedChildren = open ? children : null

  return (
    <ToggleStyle
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
          type="button"
        />
      )}
      {render ? children : conditionalRenderedChildren}
      {hasBackDrop && open && (
        <BackDrop onClick={handleOnClick} hideOverFlow={false} />
      )}
    </ToggleStyle>
  )
}

Toggle.defaultProps = {
  render: true,
  ToggleHandler: ToggleButton,
}

export default Toggle
