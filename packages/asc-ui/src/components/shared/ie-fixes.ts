/* eslint-disable import/prefer-default-export */
export const flexboxMinHeightFix = () => `
  &:after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`
