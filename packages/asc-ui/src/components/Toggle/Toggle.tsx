import React from 'react'
import ToggleStyle, { Props as ToggleStyleProps } from './ToggleStyle'
import ownerDocument from '../../utils/ownerDocument'
import usePassPropsToChildren from '../../utils/usePassPropsToChildren'
import useActionOnEscape from '../../utils/useActionOnEscape'
import ToggleHeaderButton from './ToggleHeaderButton'

export type ToggleHeaderProps = {
  iconOpen?: React.ReactElement
  iconClose?: React.ReactElement
  open?: boolean
} & React.HTMLAttributes<HTMLElement>

export type Props = {
  render?: boolean
  onOpen?: Function
  ToggleHeader?: any
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
} & ToggleStyleProps &
  ToggleHeaderProps

const Toggle: React.FC<Props> = ({
  children: childrenProps,
  onClick,
  open: openProp,
  onKeyDown,
  onOpen,
  css,
  render,
  iconOpen,
  iconClose,
  ToggleHeader,
  ...otherProps
}) => {
  const [open, setOpen] = React.useState(false)
  const { onKeyDown: onKeyDownHook } = useActionOnEscape(() => setOpen(false))
  const ref = React.useRef(null!)

  const handleOnBlur = () => {
    setTimeout(() => {
      const element = ref.current
      if (element) {
        const currentFocus = ownerDocument(element).activeElement
        // @ts-ignore
        if (!element.contains(currentFocus)) {
          setOpen(false)
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
    setOpen(!open)
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
      setOpen(openProp)
    }
  }, [openProp])

  const handleOnOpen = React.useCallback(
    openParam => onOpen && onOpen(openParam),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  React.useEffect(() => {
    handleOnOpen(open)
  }, [handleOnOpen, open])

  const conditionalRenderedChildren = open ? children : null

  return (
    <ToggleStyle
      // @ts-ignore
      ref={ref}
      css={css}
      onBlur={handleOnBlur}
      onKeyDown={handleOnKeyDown}
      {...otherProps}
    >
      <ToggleHeader
        {...{
          open,
          iconClose,
          iconOpen,
          onClick: handleOnClick,
          ...otherProps,
        }}
      />
      {render ? children : conditionalRenderedChildren}
    </ToggleStyle>
  )
}

Toggle.defaultProps = {
  render: true,
  ToggleHeader: ToggleHeaderButton,
}

export default Toggle
