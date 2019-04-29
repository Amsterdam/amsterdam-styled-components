export namespace ContextMenuStyleProps {
  export type ContextMenuWrapperStyleProps = {}

  export enum Position {
    bottom = 'bottom',
    top = 'top',
  }

  export type ContextMenuItemStyleProps = {
    role?: string
    id?: string
    label?: string
    focused?: boolean
    divider?: boolean
  }

  export type ContextMenuListStyleProps = {
    labelId?: string
    position?: Position
  }
}
