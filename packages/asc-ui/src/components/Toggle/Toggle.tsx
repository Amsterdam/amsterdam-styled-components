import { forwardRef, HTMLAttributes, useImperativeHandle, useRef } from 'react'
import styled from 'styled-components'
import { themeColor } from '../../utils/themeUtils'

type Props = {
  id: string
  left: string
  right: string
  value: string
  className?: string
}

export const WrapperStyle = styled.span`
  input:checked + label {
    color: ${themeColor('tint', 'level1')};
    background-color: ${themeColor('secondary')};
    border: 2px solid ${themeColor('secondary')};
    padding: 12px 18px;
  }
`

type RadioProps = {
  role: string
  id: string
  type: string
}

const RadioStyle = styled.input.attrs({
  type: 'radio',
})<RadioProps>`
  opacity: 0;
  position: absolute;
`

type LabelProps = {
  htmlFor: string
}

const LabelStyle = styled.label<LabelProps>`
  background-color: ${themeColor('tint', 'level3')};
  font-weight: bold;
  padding: 12px 20px;
`

const Toggle = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(({ id, left, right, value, className, ...otherProps }, externalRef) => {
  const ref = useRef<HTMLInputElement>(null)

  useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

  return (
    <WrapperStyle className={className}>
      <RadioStyle
        role="switch"
        name={id}
        id={`${id}-${left}`}
        value={left}
        defaultChecked={value === left}
        {...{ ...otherProps }}
      />
      <LabelStyle htmlFor={`${id}-${left}`}>{left}</LabelStyle>

      <RadioStyle
        role="switch"
        name={id}
        id={`${id}-${right}`}
        value={right}
        defaultChecked={value === right}
        {...{ ...otherProps }}
      />
      <LabelStyle htmlFor={`${id}-${right}`}>{right} </LabelStyle>
    </WrapperStyle>
  )
})

export default Toggle
