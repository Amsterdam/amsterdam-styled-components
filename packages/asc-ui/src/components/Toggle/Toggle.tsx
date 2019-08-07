import React from 'react'
import ToggleStyle, { Props as ToggleStyleProps } from './ToggleStyle'
import ownerDocument from '../../utils/ownerDocument'
import usePassPropsToChildren from '../../utils/hooks/usePassPropsToChildren'
import useActionOnEscape from '../../utils/hooks/useActionOnEscape'
import ToggleButton, {
  Props as ToggleButtonProps,
} from '../Button/ToggleButton/ToggleButton'

export type ToggleHandlerProps = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
} & ToggleButtonProps &
  React.HTMLAttributes<HTMLElement>

export type Props = {
  render?: boolean
  onOpen?: Function
  ToggleHandler?: any
  rotateOnOpen?: number
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
} & ToggleStyleProps &
  ToggleHandlerProps

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
  ToggleHandler,
  title,
  ...otherProps
}) => {
  const [open, setOpen] = React.useState(false)
  const { onKeyDown: onKeyDownHook } = useActionOnEscape(() =>
    handleOnOpen(false),
  )
  const ref = React.useRef(null!)

  const handleOnBlur = () => {
    setTimeout(() => {
      const element = ref.current
      if (element) {
        const currentFocus = ownerDocument(element).activeElement
        // @ts-ignore
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

  const handleOnOpen = React.useCallback(
    openParam => {
      console.log('handleOnOpen', openParam)

      onOpen && onOpen(openParam)
      setOpen(openParam)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

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
      <ToggleHandler
        {...{
          open,
          iconClose,
          iconOpen,
          onClick: handleOnClick,
          title,
        }}
      />
      {render ? children : conditionalRenderedChildren}
    </ToggleStyle>
  )
}

Toggle.defaultProps = {
  render: true,
  ToggleHandler: ToggleButton,
}

export default Toggle
