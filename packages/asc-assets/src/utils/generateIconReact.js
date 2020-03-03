function iconTemplate({ template }, opts, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })
  return typeScriptTpl.ast`
    import * as React from 'react';
    const ${componentName} = (props: React.SVGAttributes<SVGElement>) => ${jsx};
    export default ${componentName};
  `
}

module.exports = iconTemplate
