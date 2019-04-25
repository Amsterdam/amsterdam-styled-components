import styled from '../../styled-components'
import { getColorFromTheme } from '../../utils'

const HeaderTallStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 158px;
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  margin: 0 auto;
  max-width: 1600px;

  & > :first-child {
    height: 108px;
    width: 100%;
  }

  & > :nth-child(2) {
    height: 50px;
    flex-grow: 1;
    background-color: ${({ theme }) =>
      getColorFromTheme(theme, 'tint', 'level2')};
  }

  & > :nth-child(3) {
    height: 50px;
    min-width: 100px;
    background-color: ${({ theme }) =>
      getColorFromTheme(theme, 'tint', 'level2')};
  }
`

export default HeaderTallStyle
