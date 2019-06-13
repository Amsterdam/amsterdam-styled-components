import { Theme } from '@datapunt/asc-core'

export namespace MenuStyleProps {
  export enum Position {
    bottom = 'bottom',
    top = 'top',
  }

  export enum Align {
    left = 'left',
    right = 'right',
  }

  export type SharedStyleProps = {
    focused?: boolean
    height?: number
  }

  export type MenuButtonStyleProps = {} & SharedStyleProps

  export type MenuItemStyleProps = {
    role?: string
    id?: string
    label?: string
    open?: boolean
    divider?: boolean
    hoverColor?: Theme.TypeLevel
  } & SharedStyleProps

  export type MenuListStyleProps = {
    labelId?: string
    position?: Position
    right?: number
    top?: number
    focused?: boolean
    alignRight?: boolean
    css?: string
  }

  export type MenuWrapperStyleProps = {
    css?: string
  } & SharedStyleProps
}
