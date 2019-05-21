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

export interface HelperRenderOptions {
  placeholders?: {
    primaryColor?: string
    secondaryColor?: string
  }
  extraSVGAttrs?: {
    [key: string]: string
  }
}
