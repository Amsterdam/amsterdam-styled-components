import * as React from 'react'
import { ButtonBarStyled, Theme } from '@amsterdam/asc-core'
import { mount } from 'enzyme'
import ThemeProvider from '../ThemeProvider'
import Button from '../components/Button'
import 'jest-styled-components'

describe('Styled components', () => {
  it('should render buttons', () => {
    const component = mount(
      <ThemeProvider>
        <ButtonBarStyled>
          <Button text="hello" color={Theme.TypeLevel.primary} />
          <Button text="world" color={Theme.TypeLevel.secondary} />
        </ButtonBarStyled>
      </ThemeProvider>,
    )
    expect(component).toMatchSnapshot()
  })
})
