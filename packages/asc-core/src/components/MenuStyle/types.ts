export namespace MenuStyleProps {
  export type WrapperStyleProps = {}

  export enum Position {
    bottom = 'bottom',
    top = 'top',
  }

  export type MenuButtonStyleProps = {
    open?: boolean
  }

  export type MenuItemStyleProps = {
    role?: string
    id?: string
    label?: string
    focused?: boolean
    open?: boolean
    divider?: boolean
    borderBottom?: boolean
  }

  export type MenuListStyleProps = {
    labelId?: string
    position?: Position
  }
}
