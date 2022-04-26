import type { LabelHTMLAttributes, ReactNode } from 'react'
import { useState } from 'react'
import type { Props as StyleProps } from './LabelStyle'
import LabelStyle, { LabelTextStyle } from './LabelStyle'
import usePassPropsToChildren from '../../utils/hooks/usePassPropsToChildren'
import LabelContext from './LabelContext'

type Props = {
  label: ReactNode
  noActiveState?: boolean // Temporary solution to make the active state on the label optional, as there is nothing specified in design system. Needs to be discussed with design.
} & StyleProps

function Label({
  children: childrenProps,
  label,
  disabled,
  position,
  noActiveState,
  ...otherProps
}: Props & LabelHTMLAttributes<HTMLLabelElement>) {
  const [active, setActive] = useState(false)
  const { children } = usePassPropsToChildren(childrenProps, {
    disabled,
  })

  const activeState = noActiveState ? false : active

  return (
    <LabelContext.Provider value={{ active, setActive }}>
      <LabelStyle
        {...{ ...otherProps, disabled, position }}
        active={activeState}
      >
        <LabelTextStyle position={position}>{label}</LabelTextStyle>
        {children}
      </LabelStyle>
    </LabelContext.Provider>
  )
}

Label.defaultProps = {
  noActiveState: false,
} as Props

export default Label
