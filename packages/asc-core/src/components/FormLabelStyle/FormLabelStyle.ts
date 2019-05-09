import styled from '../../styled-components'

interface IProps {
  error: boolean
}

const FormLabelStyle = styled.label.attrs({
  type: 'text',
})`
  margin-bottom: 5px;
  color: ${(props: IProps) => (props.error ? 'blue' : 'black')};
`

export default FormLabelStyle
