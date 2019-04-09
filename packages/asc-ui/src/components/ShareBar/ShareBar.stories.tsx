import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as Facebook } from '@datapunt/asc-assets/lib/Icons/Facebook.svg'
import { ReactComponent as Twitter } from '@datapunt/asc-assets/lib/Icons/Twitter.svg'
import { ReactComponent as Linkedin } from '@datapunt/asc-assets/lib/Icons/Linkedin.svg'
import { ReactComponent as Email } from '@datapunt/asc-assets/lib/Icons/Email.svg'
import { ReactComponent as Print } from '@datapunt/asc-assets/lib/Icons/Print.svg'
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
      hoverColor="#3b5999"
      iconSize={24}
      alignIcon="bottom"
    >
      <Facebook />
    </ShareButton>
    <ShareButton
      onClick={() =>
        window.open(
          `https://twitter.com/intent/tweet?url=${window.location.href}` +
            `&text=${window.document.title}`,
          '_blank',
        )
      }
      hoverColor="#55acee"
    >
      <Twitter />
    </ShareButton>
    <ShareButton
      onClick={() =>
        window.open(
          `
          https://www.linkedin.com/shareArticle?url=${window.location.href}` +
            `&mini=true&title=${window.document.title}`,
          '_blank',
        )
      }
      hoverColor="#0077B5"
    >
      <Linkedin />
    </ShareButton>
    <ShareButton
      onClick={() =>
        window.open(
          `mailto:?subject=${window.document.title.slice(0, 77)}` +
            `&title=${escape(window.location.href)}`,
        )
      }
    >
      <Email />
    </ShareButton>
    <ShareButton onClick={() => window.print()}>
      <Print />
    </ShareButton>
    {children}
  </ShareBar>
)

storiesOf('Composed/ShareBar', module).add(
  'default state with most used buttons',
  () => <SimpleComponent />,
)
