import styled from '@datapunt/asc-core'

interface Props {
  id: string
  name: string
  value: string
  defaultChecked: boolean
  disabled: boolean
}

const RadioStyle = styled.input.attrs<Props>({
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
export default RadioStyle
