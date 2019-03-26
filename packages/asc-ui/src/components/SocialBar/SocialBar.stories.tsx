import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ReactComponent as Facebook } from '@datapunt/asc-assets/lib/Icons/Facebook.svg'
import { ReactComponent as Twitter } from '@datapunt/asc-assets/lib/Icons/Twitter.svg'
import { ReactComponent as Linkedin } from '@datapunt/asc-assets/lib/Icons/Linkedin.svg'
import { ReactComponent as Email } from '@datapunt/asc-assets/lib/Icons/Email.svg'
import { ReactComponent as Print } from '@datapunt/asc-assets/lib/Icons/Print.svg'
import SocialBar from './SocialBar'
import SocialButton from '../SocialButton'

const SimpleComponent: React.FC<{}> = ({ children }) => (
  <SocialBar>{children}</SocialBar>
)

storiesOf('SocialBar', module).add('default state', () => (
  <SimpleComponent>
    <SocialButton
      onClick={() =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=` +
            `${window.location.href}&title=${window.document.title}`,
          '_blank',
        )
      }
      aria-label="Facebook"
    >
      <Facebook />
    </SocialButton>
    <SocialButton
      onClick={() =>
        window.open(
          `https://twitter.com/intent/tweet?url=${window.location.href}` +
            `&text=${window.document.title}`,
          '_blank',
        )
      }
      aria-label="Twitter"
    >
      <Twitter />
    </SocialButton>
    <SocialButton
      onClick={() =>
        window.open(
          `
          https://www.linkedin.com/shareArticle?url=${window.location.href}` +
            `&mini=true&title=${window.document.title}`,
          '_blank',
        )
      }
      aria-label="Linkedin"
    >
      <Linkedin />
    </SocialButton>
    <SocialButton
      onClick={() =>
        window.open(
          `mailto:?subject=${window.document.title.slice(0, 77)}` +
            `&title=${escape(window.location.href)}`,
        )
      }
      aria-label="Email"
    >
      <Email />
    </SocialButton>
    <SocialButton onClick={() => window.print()} aria-label="Print">
      <Print />
    </SocialButton>
  </SimpleComponent>
))
