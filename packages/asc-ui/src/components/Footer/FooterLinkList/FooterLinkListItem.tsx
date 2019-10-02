import React from 'react'
import styled from '@datapunt/asc-core'
import { themeColor, svgFill } from '../../../utils'
import { ListItem } from '../../List'
import TypographyStyle from '../../Typography/TypographyStyle'
import IconStyle from '../../Icon/IconStyle'
import LinkStyle from '../../Link/LinkStyle'

const StyledListItem = styled(ListItem)`
  ${TypographyStyle} {
    color: ${themeColor('tint', 'level1')};
  }

  ${IconStyle} {
    ${svgFill('tint', 'level1')};
  }

  ${LinkStyle} {
    color: ${themeColor('tint', 'level1')};
    background-color: 'transparent';

    &:hover {
      color: ${themeColor('tint', 'level1')};
      text-decoration: underline;

      ${IconStyle} {
        ${svgFill('tint', 'level1')};
      }
    }
  }
`

const FooterLinkListItem = ({ children, ...otherProps }: any) => (
  <StyledListItem {...otherProps}>{children}</StyledListItem>
)

export default FooterLinkListItem
