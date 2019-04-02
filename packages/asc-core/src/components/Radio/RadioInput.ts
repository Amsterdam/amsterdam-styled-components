import styled from '../../styled-components'

type Props = {
  id: string
  name: string
  label: string
  value?: string
  defaultChecked?: boolean
  disabled?: boolean
}

const Radio = styled.input.attrs<Props>(props => ({
  type: 'radio',
  id: props.id,
  name: props.name,
  value: props.value,
  defaultChecked: props.defaultChecked,
  disabled: props.disabled,
}))`
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
