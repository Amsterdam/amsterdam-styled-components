import { AbstractNode, HelperRenderOptions, IconDefinition } from './types'

export function renderIconDefinitionToSVGElement(
  icon: IconDefinition,
  options: HelperRenderOptions = {},
): string {
  return renderAbstractNodeToSVGElement(icon.icon, options)
}

function renderAbstractNodeToSVGElement(
  node: AbstractNode,
  options: HelperRenderOptions,
): string {
  const targetAttrs =
    node.tag === 'svg'
      ? {
          ...node.attrs,
          ...(options.extraSVGAttrs || {}),
        }
      : node.attrs
  const attrs = Object.keys(targetAttrs).reduce((acc: string[], nextKey) => {
    const key = nextKey
    const value = targetAttrs[key]
    const token = `${key}="${value}"`
    acc.push(token)
    return acc
  }, [])
  const attrsToken = attrs.length ? ` ${  attrs.join(' ')}` : ''
  const container: [string, string] = [
    `<${node.tag}${attrsToken}>`,
    `</${node.tag}>`,
  ]
  const children = (node.children || [])
    .map(child => renderAbstractNodeToSVGElement(child, options))
    .join('')
  return `${container[0]}${children}${container[1]}`
}
