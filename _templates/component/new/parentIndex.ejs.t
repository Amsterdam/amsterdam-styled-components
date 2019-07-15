---
inject: true
to: "<%= parent ? `packages/asc-ui/src/components/${parent}/index.ts` : null %>"
after: export
skip_if: <%= name %>
---
export { <%= name %> } from './<%= name %>'