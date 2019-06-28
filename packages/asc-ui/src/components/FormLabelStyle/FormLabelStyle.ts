import styled from '@datapunt/asc-core'
import { srOnlyStyle } from '../../utils'

interface IProps {
  htmlFor?: string
  srOnly: boolean
}

const FormLabelStyle = styled.label.attrs<IProps>(({ htmlFor }: IProps) => {
  return {
    type: 'text',
    htmlFor,
  }
})`
  ${srOnlyStyle()}
`

export default FormLabelStyle
