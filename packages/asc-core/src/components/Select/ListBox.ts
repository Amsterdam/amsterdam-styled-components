import styled from '../../styled-components'

export type Props = {
  labelId?: string
  orientation?: 'bottom' | 'top'
}

const ListBox = styled.div.attrs<Props>(({ labelId }) => ({
  'aria-labelledby': `asc_selection_label_${labelId}`,
  role: 'listbox',
  tabindex: 0,
}))<Props>`
  order: ${({ orientation }) => (orientation === 'top' ? -1 : 0)}
  padding: 0 15px;
  margin: 15px 0;
`
export default ListBox
