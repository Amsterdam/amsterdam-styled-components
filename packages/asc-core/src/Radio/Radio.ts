import styled from 'styled-components'

const Radio = styled.input.attrs({
  type: 'radio',
  id: (props) => props.id,
  name: (props) => props.name,
  value: (props) => props.value,
  defaultChecked: (props) => props.defaultChecked,
  disabled: (props) => props.disabled
})`
  cursor: pointer;
  height: 28px;
  left: 0;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 28px;
  zoom: 1;
`
export default Radio
