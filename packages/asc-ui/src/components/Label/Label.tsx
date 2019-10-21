import React from 'react'
import LabelStyle, { LabelTextStyle, Props as StyleProps } from './LabelStyle'
import usePassPropsToChildren from '../../utils/hooks/usePassPropsToChildren'
import LabelContext from './LabelContext'

type Props = {
  label: string
} & StyleProps

const Label: React.FC<Props & React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  children: childrenProps,
  label,
  disabled,
  position,
  ...otherProps
}) => {
  const [active, setActive] = React.useState(false)
  const { children } = usePassPropsToChildren(childrenProps, {
    disabled,
  })
  return (
    <LabelContext.Provider value={{ active, setActive }}>
      <LabelStyle {...{ ...otherProps, disabled, position, active }}>
        <LabelTextStyle position={position}>{label}</LabelTextStyle>
        {children}
      </LabelStyle>
    </LabelContext.Provider>
  )
}

export default Label
