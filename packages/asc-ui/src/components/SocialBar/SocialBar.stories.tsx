import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as Calendar } from '@datapunt/asc-assets/lib/Icons/Calendar.svg'
import SocialBar from './SocialBar'
import SocialButton from '../SocialButton'

const SimpleComponent: React.FC<{}> = ({ children }) => (
  <SocialBar>{children}</SocialBar>
)

storiesOf('SocialBar', module)
  .add('default state', () => <SimpleComponent />)
  .add('extended state', () => (
    <SimpleComponent>
      <SocialButton aria-label="Calendar">
        <Calendar />
      </SocialButton>
    </SimpleComponent>
  ))
