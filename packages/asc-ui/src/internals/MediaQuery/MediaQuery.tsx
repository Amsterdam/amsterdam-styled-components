import React from 'react'
import styled from '@datapunt/asc-core'

export interface IBreakpointParams {
  min?: string
  max?: string
  children: any
}

export const hideAt = (breakpoints: any) => {
  const rulesets = Object.entries(breakpoints).reduce(
    (acc, [constraint, width]: any): any => [
      ...acc,
      {
        constraint,
        width,
        rules: `display: none;`,
      },
    ],
    [],
  )
  const css = rulesets.reduce(
    (cssString: any, { constraint, width, rules }: any) =>
      `${cssString} @media screen and (${constraint}-width: ${width}) { ${rules} }`,
    '',
  )
  return css
}

export const MediaQuery = ({ min, max, children }: IBreakpointParams) => {
  const css = hideAt({ min, max })
  const Component = styled('div')`
    ${css}
  `
  return <Component>{children}</Component>
}

export default MediaQuery
