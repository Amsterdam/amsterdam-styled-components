import styled from '@datapunt/asc-core'
import LinkListStyle from '../../LinkList/LinkListStyle'
import HeadingStyle from '../../Typography/HeadingStyle'

export default styled.aside`
  ${LinkListStyle} {
    margin: 16px 0;
  }

  & > ${HeadingStyle} {
    /** matching the line-height of the article's heading **/
    min-height: 38px;
  }
`
