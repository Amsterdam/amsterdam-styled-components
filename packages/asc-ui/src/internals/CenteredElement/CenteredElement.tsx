import * as React from 'react'
import styled from '@datapunt/asc-core'

const CenteredElementStyle = styled.div`
  display: flex;
  height: 100%;
  & > div {
    align-self: center;
    flex-grow: 1;
    text-align: center;
  }
`

const CenteredElement: React.FC<{}> = ({ children }) => (
  <CenteredElementStyle>
    <div>{children}</div>
  </CenteredElementStyle>
)

export default CenteredElement
