export interface AbstractNode {
  tag: string
  attrs: {
    [key: string]: string
  }
  children?: AbstractNode[]
}

export interface IconDefinition {
  name: string // kebab-case-style
  icon: AbstractNode
}

// svg folder names
export type ThemeType = 'fill'

export interface HelperRenderOptions {
  placeholders?: {
    primaryColor?: string
    secondaryColor?: string
  }
  extraSVGAttrs?: {
    [key: string]: string
  }
}
