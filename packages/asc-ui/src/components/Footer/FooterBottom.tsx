import type { FunctionComponent } from 'react'
import styled from 'styled-components'
import { themeSpacing } from '../../utils'
import { Row } from '../Grid'

const FooterBottomStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: ${themeSpacing(3, 0)};

  & > *:not(:last-of-type) {
    margin-right: ${themeSpacing(7)};
  }
`

const FooterBottom: FunctionComponent = ({ children, ...otherProps }) => (
  <Row>
    <FooterBottomStyle {...otherProps}>{children}</FooterBottomStyle>
  </Row>
)

export default FooterBottom
