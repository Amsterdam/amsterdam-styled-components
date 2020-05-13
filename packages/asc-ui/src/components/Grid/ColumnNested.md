# Nesting `<Column />`

Nesting columns can be tricky, because of the width of the parent element and the widths in percentages of each column. The `<Column />` component contains its parent's span context and can thus safely be nested:

```jsx
<Column span={10}>
  <Column push={1} span={4}>
    ...
  </Column>
  <Column span={4}>...</Column>
</Column>
```

Whenever a child `<Column />` component should span the entire width of its parent, the parent should be passed the prop `wrap`. If not, all child components will remain adjacent to one another.

```jsx
<Column wrap span={10}>
  <Column span={4}>...</Column>
  /** if the parent Column doesn't have a wrap prop, both the column below and the
  above sibling will be placed on a single line as per the flexbox spec */
  <Column span={10}>...</Column>
</Column>
```
