export namespace MenuStyleProps {
  export enum Position {
    bottom = 'bottom',
    top = 'top',
  }

  export type MenuButtonStyleProps = {
    focused?: boolean
    mobile?: boolean
    height?: number
  }

  export type MenuItemStyleProps = {
    role?: string
    id?: string
    label?: string
    focused?: boolean
    open?: boolean
    divider?: boolean
    height?: number
  }

  export type MenuListStyleProps = {
    labelId?: string
    position?: Position
    top?: number
    focused?: boolean
  }

  export type MenuWrapperStyleProps = {
    focused?: boolean
  }
}
