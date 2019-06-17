function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })
  return typeScriptTpl.ast`
    import * as React from 'react';
    const ${componentName} = (props: any) => ${jsx};
    export default ${componentName};
  `
}
module.exports = template
