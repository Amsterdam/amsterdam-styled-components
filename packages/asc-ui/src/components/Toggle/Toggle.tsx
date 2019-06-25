import React from 'react'
import { Close, Menu } from '@datapunt/asc-assets'
import ToggleStyle, { Props as ToggleStyleProps } from './ToggleStyle'
import Icon from '../Icon'
import ButtonToggle from '../ButtonToggle/ButtonToggleStyle'
import ownerDocument from '../../utils/ownerDocument'
import usePassPropsToChildren from '../../utils/usePassPropsToChildren'
import useActionOnEscape from '../../utils/useActionOnEscape'

export type Props = {
  icon?: React.ReactElement
  open?: boolean
  render?: boolean
  onOpen?: Function
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
} & React.HTMLProps<HTMLElement> &
  ToggleStyleProps

const Toggle: React.FC<Props> = ({
  children: childrenProps,
  onClick,
  open: openProp,
  onKeyDown,
  onOpen,
  css,
  render,
  icon,
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
    if (openProp) {
      setOpen(openProp)
    }
  }, [openProp])

  React.useEffect(() => {
    if (onOpen) {
      onOpen(open)
    }
  }, [open])

  const ClosedIcon = icon || <Menu />

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
      <ButtonToggle open={open} onClick={handleOnClick}>
        <Icon>{open ? <Close /> : ClosedIcon}</Icon>
      </ButtonToggle>
      {render ? children : conditionalRenderedChildren}
    </ToggleStyle>
  )
}

Toggle.defaultProps = {
  render: true,
}

export default Toggle
