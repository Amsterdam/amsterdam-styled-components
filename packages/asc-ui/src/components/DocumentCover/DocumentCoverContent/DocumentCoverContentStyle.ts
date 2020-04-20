import styled from 'styled-components'
import { breakpoint, themeSpacing } from '../../../utils'
import ImageStyle from '../../Image/ImageStyle'

export default styled.div`
  display: flex;
  flex-direction: column;
  margin: ${themeSpacing(8, 0)};

  @media screen and ${breakpoint('max-width', 'tabletS')} {
    margin: ${themeSpacing(5)};
  }

  & > ${ImageStyle} {
    max-width: 300px;
    margin-bottom: ${themeSpacing(8)};
    width: 100%;

    @media screen and ${breakpoint('max-width', 'tabletS')} {
      max-width: 200px;
      margin-bottom: ${themeSpacing(5)};
    }
  }
`
