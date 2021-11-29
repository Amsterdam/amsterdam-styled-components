import type { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import {
  getTypographyFromTheme,
  srOnlyStyle,
  themeColor,
  themeSpacing,
} from '../../utils'

interface IProps {
  htmlFor?: string
  srOnly: boolean
  label?: ReactNode
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

  ${({ srOnly }) => srOnly && srOnlyStyle}
`

export default FormLabelStyle
