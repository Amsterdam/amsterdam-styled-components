export namespace MenuStyleProps {
  export type WrapperStyleProps = {}

  export enum Position {
    bottom = 'bottom',
    top = 'top',
  }

  export type MenuItemStyleProps = {
    role?: string
    id?: string
    label?: string
    focused?: boolean
    divider?: boolean
  }

  export type MenuListStyleProps = {
    labelId?: string
    position?: Position
  }
}
