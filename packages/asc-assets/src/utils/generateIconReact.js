const typescriptTemplate = ({ componentName, jsx, exports }, { tpl }) => {
  return tpl`
    import type { SVGAttributes } from 'react'

    function ${componentName}(props: SVGAttributes<SVGElement>) {
      return ${jsx};
    }

    ${exports}
  `
}

module.exports = typescriptTemplate
