import * as React from 'react'
import { renderWithTheme } from '../../utils/withTheme'
import Typography from './Typography'
import 'jest-styled-components'

describe('Typography', () => {
  it('should render the typography types', () => {
    const component = renderWithTheme(
      <>
        <Typography as="h1">Heading one</Typography>
        <Typography as="h2">Heading two</Typography>
        <Typography as="h3">Heading three</Typography>
        <Typography as="h4">Heading four</Typography>
        <Typography as="h5">Heading five</Typography>
        <Typography as="h6">Heading six</Typography>
        <Typography as="a" href="/">
          I am a link!
        </Typography>
        <Typography as="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolor
          dolorem esse illum magni&nbsp;
          <Typography as="a" href="/">
            I am a link!
          </Typography>
          &nbsp; optio porro qui ratione vitae?
        </Typography>
      </>,
    )
    expect(component).toMatchSnapshot()
  })
})
