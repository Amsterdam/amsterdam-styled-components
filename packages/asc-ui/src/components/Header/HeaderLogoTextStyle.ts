import styled from '@datapunt/asc-core'

type Props = {
  tall?: boolean
}

const HeaderLogoTextStyle = styled.h1<Props>`
  margin: 0;
  font-weight: 700;
  display: flex;
  justify-content: normal;
  align-items: center;
  flex-shrink: 1;
  box-sizing: content-box;
`
export default HeaderLogoTextStyle
