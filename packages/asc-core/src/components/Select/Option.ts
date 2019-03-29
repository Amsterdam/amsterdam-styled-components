import styled from '../../styled-components'
import focus from '../shared/focus'

export type Props = {
  id: string
  label: string
  isCurrentTab: boolean
}

const Option = styled.button.attrs<Props>(({ isCurrentTab }) => ({
  'aria-selected': isCurrentTab,
  role: 'option',
}))`
  ${({ theme }) => focus(theme)}
`

export default Option
