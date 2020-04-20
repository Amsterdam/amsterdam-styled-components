import styled, { css } from 'styled-components'
import {
  srOnlyStyle,
  getTypographyFromTheme,
  themeSpacing,
  themeColor,
} from '../../utils'

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
    (label || error) && // Style if `label` or `errer` prop is set
    !srOnly && // Don't style for screen reader
    css`
      display: block;
      padding-bottom: ${themeSpacing(2)};
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
