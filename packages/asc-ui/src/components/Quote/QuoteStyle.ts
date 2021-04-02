import styled from 'styled-components'
import TypographyStyle, {
  Props as TypographyProps,
} from '../Typography/TypographyStyle'
import { themeColor, themeSpacing } from '../../utils'

export type Props = TypographyProps

// export const BlockquoteStyleCSS = css``

export default styled(TypographyStyle)<Props>`
  margin-bottom: ${themeSpacing(5)};
  padding: ${themeSpacing(1, 4)};
  border-left: 2px solid ${themeColor('tint', 'level4')};
  font-style: italic;

  & p {
    margin-bottom: 0;
  }
`
