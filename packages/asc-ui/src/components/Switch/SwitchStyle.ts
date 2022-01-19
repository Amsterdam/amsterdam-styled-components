import styled from 'styled-components'
import { themeColor } from '../../utils'

const SwitchStyle = styled.span`
  display: inline-flex;
  align-items: center;
  position: relative;
`

export const Track = styled.span`
  position: relative;
  display: inline-block;
  background-color: ${themeColor('tint', 'level2')};
  border: 1px solid ${themeColor('tint', 'level3')};
  height: 20px;
  width: 40px;
  border-radius: 22px;
  transition: background-color 0.3s;
`

export const Knob = styled.span`
  position: absolute;
  left: 1px;
  top: 1px;
  display: inline-block;
  background-color: ${themeColor('tint', 'level1')};
  border: 1px solid ${themeColor('tint', 'level3')};
  box-shadow: 1px 0 2px 0 rgba(0, 0, 0, 0.2);
  height: 18px;
  width: 18px;
  border-radius: 50%;
  transition: transform 0.3s, box-shadow 0.3s;
`

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:checked + ${Track} {
    background-color: ${themeColor('support', 'valid')};
    border-color: ${themeColor('support', 'valid')};

    & + ${Knob} {
      box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.2);
      transform: translateX(20px);
    }
  }
`

export default SwitchStyle
