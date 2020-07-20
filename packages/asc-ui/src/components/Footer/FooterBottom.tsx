import React from 'react'
import styled from 'styled-components'
import { themeSpacing } from '../../utils'
import { Row } from '../Grid'

type Props = {
  rowProps: object
}

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

const FooterBottom: React.FC<Props> = ({
  children,
  rowProps,
  ...otherProps
}) => (
  <Row {...rowProps}>
    <FooterBottomStyle {...otherProps}>{children}</FooterBottomStyle>
  </Row>
)

export default FooterBottom
