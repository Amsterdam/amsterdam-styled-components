function iconTemplate({ template }, opts, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })
  return typeScriptTpl.ast`
    import type { SVGAttributes } from 'react'
    const ${componentName} = (props: SVGAttributes<SVGElement>) => ${jsx}
    export default ${componentName}
  `
}

module.exports = iconTemplate
