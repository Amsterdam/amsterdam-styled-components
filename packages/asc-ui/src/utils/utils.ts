import { AbstractNode, IconDefinition } from '@datapunt/asc-icons/lib/types'
import * as React from 'react'

export function log(message: string) {
  if (!(process && process.env && process.env.NODE_ENV === 'production')) {
    console.error(`[icons-react]: ${message}.`)
  }
}

export function isIconDefinition(target: any): target is IconDefinition {
  return (
    typeof target === 'object' &&
    typeof target.name === 'string' &&
    typeof target.icon === 'object'
  )
}

export function normalizeAttrs(attrs: Attrs = {}): Attrs {
  return Object.keys(attrs).reduce((acc: Attrs, key) => {
    const val = attrs[key]
    switch (key) {
      case 'class':
        acc.className = val
        delete acc.class
        break
      default:
        acc[key] = val
    }
    return acc
  }, {})
}

export interface Attrs {
  [key: string]: string
}

export class MiniMap<V> {
  get size() {
    return Object.keys(this.collection).length
  }

  private collection: { [key: string]: V } = {}

  clear(): void {
    this.collection = {}
  }

  delete(key: string): boolean {
    return delete this.collection[key]
  }

  get(key: string): V | undefined {
    return this.collection[key]
  }

  has(key: string): boolean {
    return Boolean(this.collection[key])
  }

  set(key: string, value: V): this {
    this.collection[key] = value
    return this
  }
}

export function generate(
  node: AbstractNode,
  key: string,
  rootProps?: { [key: string]: any } | false,
): any {
  if (!rootProps) {
    return React.createElement(
      node.tag,
      { key, ...normalizeAttrs(node.attrs) },
      (node.children || []).map((child, index) =>
        generate(child, `${key}-${node.tag}-${index}`),
      ),
    )
  }
  return React.createElement(
    node.tag,
    {
      key,
      ...normalizeAttrs(node.attrs),
      ...rootProps,
    },
    (node.children || []).map((child, index) =>
      generate(child, `${key}-${node.tag}-${index}`),
    ),
  )
}
