import styled from '../../styled-components'
import { srOnlyStyle } from '../../utils'

interface IProps {
  htmlFor?: string
  srOnly: boolean
}

const FormLabelStyle = styled.label.attrs<IProps>({
  type: 'text',
  htmlFor: ({ htmlFor }: IProps) => htmlFor,
})<IProps>`
  ${srOnlyStyle()}
`

export default FormLabelStyle
