import styled from 'styled-components'
import { breakpoint, themeColor, themeSpacing } from '../../utils'

export const DescriptionListWrapper = styled.dl`
  width: 100%;
  margin-top: 0;
`

export const DescriptionListItemWrapper = styled.div`
  display: flex;
  padding: 10.5px 0;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${themeColor('tint', 'level4')};
  }

  @media screen and ${breakpoint('max-width', 'tabletM')} {
    flex-direction: column;
  }
`

export const DescriptionListTerm = styled.dt`
  margin-right: ${themeSpacing(2)};
  color: ${themeColor('tint', 'level5')};
  font-weight: 500;
  white-space: normal;
  word-break: break-word;

  @media screen and ${breakpoint('min-width', 'tabletM')} {
    width: 30%;
  }
`

export const DescriptionListDescription = styled.dd`
  white-space: normal;
  width: 70%;
  margin: 0;
  padding: 0;
`
