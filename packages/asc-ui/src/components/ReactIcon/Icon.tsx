import * as React from 'react'
import {
  AbstractNode,
  IconDefinition,
} from '@datapunt/asc-assets/lib/Icons/types'
import { generate, isIconDefinition, log, MiniMap } from '../../utils/utils'

export interface IconProps {
  type: IconDefinition
  className?: string
  onClick?: React.MouseEventHandler<SVGSVGElement>
  style?: React.CSSProperties
  focusable?: string
}

class Icon extends React.Component<IconProps> {
  static displayName = 'IconReact'

  static definitions = new MiniMap<IconDefinition>()

  static add(...icons: IconDefinition[]) {
    icons.forEach(icon => {
      this.definitions.set(icon.name, icon)
    })
  }

  static clear() {
    this.definitions.clear()
  }

  static get(key?: string): IconDefinition | undefined {
    if (key) {
      const target = this.definitions.get(key)
      return target
    }
    return undefined
  }

  render() {
    const { type, ...rest } = this.props

    let target: IconDefinition | undefined
    if (isIconDefinition(type)) {
      target = type
    } else if (typeof type === 'string') {
      target = Icon.get(type)
      if (!target) {
        return null
      }
    }
    if (!target) {
      log(`type should be string or icon definiton, but got ${type}`)
      return null
    }
    return generate(target.icon as AbstractNode, `svg-${target.name}`, {
      fill: 'currentColor',
      focusable: 'false',
      ...rest,
    })
  }
}

export default Icon
