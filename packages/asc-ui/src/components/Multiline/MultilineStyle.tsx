/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import styled from '@datapunt/asc-core'
import TypographyStyle from '../Typography/TypographyStyle'
import { TypographyProps } from '../Typography'

export interface MultilineStyleProps extends Partial<TypographyProps> {
  lineHeight: number
  lineCount: number
  backgroundColor: string
}

const MultilineStyle = styled(TypographyStyle)<MultilineStyleProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};

  overflow: hidden;
  position: relative;
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  max-height: ${({ lineHeight, lineCount }) => `${lineHeight * lineCount}px`};
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;
  &:before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: ${({ backgroundColor }) => backgroundColor};
  }
`

export default MultilineStyle
