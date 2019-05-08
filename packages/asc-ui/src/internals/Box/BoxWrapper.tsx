import * as React from 'react'
import styled from '../../styled-components'

export type Props = {
  backgroundColor?: string
}

export const BoxWrapperStyle = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: 'AvenirNextLTW01-Regular', arial, sans-serif;
`

export const BoxContainerStyle = styled.div<Props>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin: 0;
`

BoxContainerStyle.defaultProps = {
  backgroundColor: 'rgba(192, 192, 192, 0.5)',
}

const BoxWrapper: React.FC<Props> = ({ children, backgroundColor }) => (
  <BoxWrapperStyle>
    <BoxContainerStyle backgroundColor={backgroundColor}>
      {children}
    </BoxContainerStyle>
  </BoxWrapperStyle>
)

export default BoxWrapper
