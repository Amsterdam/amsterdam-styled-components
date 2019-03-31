import styled from '../../styled-components'

interface Props {
  id: string
  name: string
  label: string
  value?: string
  defaultChecked?: boolean
  disabled?: boolean
}

const Radio = styled.input.attrs<Props>({
  type: 'radio',
  id: ({ id }: Props) => id,
  name: ({ name }: Props) => name,
  value: ({ value }: Props) => value,
  defaultChecked: ({ defaultChecked }: Props) => defaultChecked,
  disabled: ({ disabled }: Props) => disabled,
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
