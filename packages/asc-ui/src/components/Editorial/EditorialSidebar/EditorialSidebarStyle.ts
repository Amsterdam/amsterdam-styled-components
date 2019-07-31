import styled from '@datapunt/asc-core'
import LinkListStyle from '../../LinkList/LinkListStyle'
import HeadingStyle from '../../Heading/HeadingStyle'
import TypographyStyle from '../../Typography/TypographyStyle'
import LinkStyle from '../../Link/LinkStyle'
import { color } from '../../../utils'

export default styled.aside`
  ${LinkListStyle} {
    margin: 16px 0;
  }

  & > ${HeadingStyle} {
    /** matching the line-height of the article's heading **/
    min-height: 38px;
  }

  ${LinkStyle} {
    & > ${TypographyStyle} {
      display: block;
      color: ${color('tint', 'level6')};
      text-decoration: none;
    }
  }

  ${/* sc-selector */ LinkStyle}:hover {
    text-decoration: none;
  }
`
