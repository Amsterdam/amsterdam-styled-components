export namespace MenuStyleProps {
  export type MenuWrapperStyleProps = {}

  export enum Position {
    bottom = 'bottom',
    top = 'top',
  }

  export type MenuButtonStyleProps = {
    open?: boolean
    height?: number
    square?: boolean
    borderBottom?: boolean
  }

  export type MenuItemStyleProps = {
    role?: string
    id?: string
    label?: string
    focused?: boolean
    open?: boolean
    divider?: boolean
    borderBottom?: boolean
    height?: number
  }

  export type MenuListStyleProps = {
    labelId?: string
    position?: Position
    top?: number
  }
}
