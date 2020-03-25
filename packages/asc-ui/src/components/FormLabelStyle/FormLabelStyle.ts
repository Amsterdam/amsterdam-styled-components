import styled, { css } from '@datapunt/asc-core'
import { srOnlyStyle, getTypographyFromTheme, themeColor } from '../../utils'

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
  ${({ label }) =>
    label &&
    css`
      ${({ theme }) =>
        getTypographyFromTheme()({
          as: 'p',
          gutterBottom: 0,
          theme,
        })};
    `}
    
  ${({ srOnly, label, error }) =>
    (label || error) && // Style if `label` or `error` prop is set
    !srOnly && // Don't style for screen reader
    css`
      display: block;
      font-weight: 700;
    `}

  ${({ error }) =>
    error &&
    css`
      color: ${themeColor('error', 'main')};
    `}


  ${srOnlyStyle()}
`

export default FormLabelStyle
