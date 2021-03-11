import styled from 'styled-components'

export type Props = {
  id: string
  className?: string
}

export const WrapperStyle = styled.span`
  input:checked + span {
    right: 0;
  }
`

export default styled.input.attrs({
  type: 'checkbox',
})<Props>`
  width: 0;
  height: 0;
`

type LabelProps = {
  htmlFor: string
}

export const LabelStyle = styled.label<LabelProps>`
  display: block;
  position: relative;
  background-color: lightgrey;
  height: 44px;
  width: 80px;
  border-radius: 22px;
`

export const KnobStyle = styled.span`
  position: absolute;
  display: inline-block;
  background-color: red;
  height: 44px;
  width: 44px;
  border-radius: 50%;
`
