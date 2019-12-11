import styled, { css } from '@datapunt/asc-core'
import { srOnlyStyle } from '../../utils'

interface IProps {
  htmlFor?: string
  srOnly: boolean
  error?: string
}

const FormLabelStyle = styled.label.attrs<IProps>(({ htmlFor }: IProps) => {
  return {
    htmlFor,
  }
})<IProps>`
  ${({ srOnly }) =>
    !srOnly &&
    css`
      display: block;
      padding-bottom: 10px;
      font-weight: 700;
    `}

  ${({ error }) =>
    error &&
    css`
      color: red;
    `}  

  ${srOnlyStyle()}
`

export default FormLabelStyle
