export enum Position {
  bottom = 'bottom',
  top = 'top',
}

export type ContextMenuWrapperStyleProps = {}

export type ContextMenuItemProps = {
  role?: string
  id: string
  label: string
  focused: boolean
  divider?: boolean
}

export type ContextMenuListProps = {
  labelId?: string
  position?: Position
}
