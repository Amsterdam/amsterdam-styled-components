import styled from '@datapunt/asc-core'

type Props = {
  error: boolean
}

const FormLabelStyle = styled.label.attrs({
  type: 'text',
})<Props>`
  margin-bottom: 5px;
  color: ${props => (props.error ? 'blue' : 'black')};
`

export default FormLabelStyle
