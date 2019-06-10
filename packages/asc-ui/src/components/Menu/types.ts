import { Theme } from '@datapunt/asc-core'

export namespace MenuStyleProps {
  export enum Position {
    bottom = 'bottom',
    top = 'top',
  }

  export type MenuButtonStyleProps = {
    focused?: boolean
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
    hoverColor?: Theme.TypeLevel
  }

  export type MenuListStyleProps = {
    labelId?: string
    position?: Position
    right?: number
    top?: number
    focused?: boolean
  }

  export type MenuWrapperStyleProps = {
    focused?: boolean
  }
}
