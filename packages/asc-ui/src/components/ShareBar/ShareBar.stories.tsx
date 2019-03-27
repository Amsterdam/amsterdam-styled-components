import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as Calendar } from '@datapunt/asc-assets/lib/Icons/Calendar.svg'
import ShareBar from './ShareBar'
import ShareButton from '../ShareButton'

const SimpleComponent: React.FC<{}> = ({ children }) => (
  <ShareBar>
    <ShareButton
      onClick={() =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=` +
            `${window.location.href}&title=${window.document.title}`,
          '_blank',
        )
      }
      type="Facebook"
    />
    <ShareButton
      onClick={() =>
        window.open(
          `https://twitter.com/intent/tweet?url=${window.location.href}` +
            `&text=${window.document.title}`,
          '_blank',
        )
      }
      type="Twitter"
    />
    <ShareButton
      onClick={() =>
        window.open(
          `
          https://www.linkedin.com/shareArticle?url=${window.location.href}` +
            `&mini=true&title=${window.document.title}`,
          '_blank',
        )
      }
      type="Linkedin"
    />
    <ShareButton
      onClick={() =>
        window.open(
          `mailto:?subject=${window.document.title.slice(0, 77)}` +
            `&title=${escape(window.location.href)}`,
        )
      }
      type="Email"
    />
    <ShareButton onClick={() => window.print()} type="Print" />
    {children}
  </ShareBar>
)

storiesOf('ShareBar', module)
  .add('default state with predefined buttons', () => <SimpleComponent />)
  .add('extended state with custom buttons', () => (
    <SimpleComponent>
      <ShareButton onClick={() => {}} aria-label="Calendar">
        <Calendar />
      </ShareButton>
    </SimpleComponent>
  ))
