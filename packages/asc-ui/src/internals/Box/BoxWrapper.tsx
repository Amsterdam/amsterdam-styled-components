import * as React from 'react'
import styled from '../../styled-components'

export type Props = {}

export const BoxWrapperStyle = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: 'AvenirNextLTW01-Regular', arial, sans-serif;
`

export const BoxContainerStyle = styled.div`
  background-color: rgba(255, 255, 0, 0.1);
  margin: 0;
`

const BoxWrapper: React.FC<{}> = ({ children }) => (
  <BoxWrapperStyle>
    <BoxContainerStyle>{children}</BoxContainerStyle>
  </BoxWrapperStyle>
)

export default BoxWrapper
