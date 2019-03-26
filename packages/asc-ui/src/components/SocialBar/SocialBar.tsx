import React from 'react'
import { AscCore } from '@datapunt/asc-core'
import { ReactComponent as Facebook } from '@datapunt/asc-assets/lib/Icons/Facebook.svg'
import { ReactComponent as Twitter } from '@datapunt/asc-assets/lib/Icons/Twitter.svg'
import { ReactComponent as Linkedin } from '@datapunt/asc-assets/lib/Icons/Linkedin.svg'
import { ReactComponent as Email } from '@datapunt/asc-assets/lib/Icons/Email.svg'
import { ReactComponent as Print } from '@datapunt/asc-assets/lib/Icons/Print.svg'
import SocialButton from '../SocialButton'

const SocialBar: React.FC<{}> = ({ children }) => (
  <AscCore.SocialBar>
    <SocialButton aria-label="Facebook">
      <Facebook />
    </SocialButton>
    <SocialButton aria-label="Twitter">
      <Twitter />
    </SocialButton>
    <SocialButton aria-label="Linkedin">
      <Linkedin />
    </SocialButton>
    <SocialButton aria-label="Email">
      <Email />
    </SocialButton>
    <SocialButton aria-label="Print">
      <Print />
    </SocialButton>
    {children}
  </AscCore.SocialBar>
)

export default SocialBar
