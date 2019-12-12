import styled, { css } from '@datapunt/asc-core'
import { srOnlyStyle, getTypographyFromTheme, themeSpacing } from '../../utils'

interface IProps {
  htmlFor?: string
  srOnly: boolean
  label?: string
  error?: string | boolean
}

const FormLabelStyle = styled.label.attrs<IProps>(({ htmlFor }: IProps) => {
  return {
    htmlFor,
  }
})<IProps>`
  ${({ srOnly, label, error }) =>
    (label || error) && // Style if `label` or `errer` prop is set
    !srOnly && // Don't style for screen reader
    css`
      ${({ theme }) =>
        getTypographyFromTheme()({
          as: 'p',
          gutterBottom: 0,
          theme,
        })};
      display: block;
      padding-bottom: ${themeSpacing(2)};
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
