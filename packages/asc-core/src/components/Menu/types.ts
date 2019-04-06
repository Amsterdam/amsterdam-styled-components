export namespace Menu {
  export type WrapperProps = {}

  export enum Orientation {
    bottom = 'bottom',
    top = 'top',
  }

  export type MenuItemProps = {
    role?: string
    id: string
    label: string
    focused: boolean
    divider?: boolean
  }

  export type MenuListProps = {
    labelId?: string
    orientation?: Orientation
  }

  export type LabelProps = {
    id: string
    small?: boolean
  }
}
