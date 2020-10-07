import styled from 'styled-components'
import { Icon } from '@amsterdam/asc-ui'
import { themeSpacing, breakpoint } from '../../utils/themeUtils'

export default styled.ul`
  display: flex;
  align-items: center;
  margin: ${themeSpacing(4)} 0;

  @media ${breakpoint('min-width', 'laptopM')} {
    margin: ${themeSpacing(5)} 0;
  }
`

export const StyledIcon = styled(Icon)`
  margin: 0 ${themeSpacing(1)};
`
