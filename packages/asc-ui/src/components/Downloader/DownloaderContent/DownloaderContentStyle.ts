import styled from '@datapunt/asc-core'
import { breakpoint } from '../../../utils'
import ImageStyle from '../../Image/ImageStyle'

export default styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px auto;

  @media screen and ${breakpoint('max-width', 'tabletS')} {
    margin: 20px;
  }

  & > ${ImageStyle} {
    max-width: 300px;
    margin-bottom: 32px;
    width: 100%;

    @media screen and ${breakpoint('max-width', 'tabletS')} {
      max-width: 180px;
      margin-bottom: 20px;
    }
  }
`
