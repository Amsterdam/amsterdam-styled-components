import * as React from 'react'
import { ButtonBarStyled, Theme } from '@amsterdam/asc-core'
import { mount } from 'enzyme'
import ThemeProvider from '../ThemeProvider'
import Button from '../components/Button'

describe('Styled components', () => {
  it('should render buttons', () => {
    const component = mount(
      <ThemeProvider>
        <ButtonBarStyled>
          <Button text="hello" color={Theme.Color.primary} />
          <Button text="world" color={Theme.Color.secondary} />
        </ButtonBarStyled>
      </ThemeProvider>,
    )
    expect(component).toMatchSnapshot()
  })
})
