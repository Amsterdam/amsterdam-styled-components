import styled from '../../styled-components'

export type Props = {
  id: string
  small?: boolean
}

const Label = styled.button.attrs<Props>(({ id }) => ({
  id: `asc_selection_label_${id}`,
  role: 'label',
}))`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 4px;
`

export default Label
