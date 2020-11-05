import styled from 'styled-components'
import { themeColor, themeSpacing } from '../../utils'
import LabelStyle from '../Label/LabelStyle'
import ButtonStyle from '../Button/ButtonStyle'

export default styled.div`
  border: 2px solid ${themeColor('tint', 'level3')};
  padding: 0 ${themeSpacing(5)} ${themeSpacing(5)};

  ${LabelStyle} {
    padding: ${themeSpacing(1)} 0;
  }

  ${ButtonStyle} {
    margin-top: ${themeSpacing(5)};
  }
`

export const FilterBoxHeader = styled.div`
  margin-bottom: ${themeSpacing(5)};
  padding: ${themeSpacing(4)} 0;
  border-bottom: 2px solid ${themeColor('tint', 'level3')};
`
