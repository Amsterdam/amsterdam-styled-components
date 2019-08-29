import React from 'react'
import LabelStyle, { LabelTextStyle, Props as StyleProps } from './LabelStyle'
import usePassPropsToChildren from '../../utils/hooks/usePassPropsToChildren'

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
  const { children } = usePassPropsToChildren(childrenProps, {
    disabled,
  })
  return (
    <LabelStyle {...{ ...otherProps, disabled, position }}>
      <LabelTextStyle position={position}>{label}</LabelTextStyle>
      {children}
    </LabelStyle>
  )
}

export default Label
