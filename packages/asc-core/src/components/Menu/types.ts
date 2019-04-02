export type WrapperProps = {}

export type MenuItemProps = {
  role?: string
  id: string
  label: string
  focused: boolean
  divider?: boolean
}

export type MenuListProps = {
  labelId?: string
  orientation?: 'bottom' | 'top'
}

export type LabelProps = {
  id: string
  small?: boolean
}
