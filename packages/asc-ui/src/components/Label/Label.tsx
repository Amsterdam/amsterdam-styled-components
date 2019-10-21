import React from 'react'
import LabelStyle, { LabelTextStyle, Props as StyleProps } from './LabelStyle'
import usePassPropsToChildren from '../../utils/hooks/usePassPropsToChildren'
import LabelContext from './LabelContext'

type Props = {
  label: string
  noActiveState?: boolean // Temporary solution to make the active state on the label optional, as there is nothing specified in design system. Needs to be discussed with design.
} & StyleProps

const Label: React.FC<Props & React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  children: childrenProps,
  label,
  disabled,
  position,
  noActiveState,
  ...otherProps
}) => {
  const [active, setActive] = React.useState(false)
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
