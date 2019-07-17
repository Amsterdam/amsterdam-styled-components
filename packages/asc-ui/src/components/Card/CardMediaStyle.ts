import styled from '@datapunt/asc-core'

export const CardMediaWrapperStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
`

const CardMediaStyle = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  line-height: 0;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

export default CardMediaStyle
