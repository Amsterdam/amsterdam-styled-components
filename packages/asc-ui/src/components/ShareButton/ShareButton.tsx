import React from 'react'
import { AscCore } from '@datapunt/asc-core'
import { ReactComponent as Facebook } from '@datapunt/asc-assets/lib/Icons/Facebook.svg'
import { ReactComponent as Twitter } from '@datapunt/asc-assets/lib/Icons/Twitter.svg'
import { ReactComponent as Linkedin } from '@datapunt/asc-assets/lib/Icons/Linkedin.svg'
import { ReactComponent as Email } from '@datapunt/asc-assets/lib/Icons/Email.svg'
import { ReactComponent as Print } from '@datapunt/asc-assets/lib/Icons/Print.svg'
import { Icon } from '../..'

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'Facebook' | 'Twitter' | 'Linkedin' | 'Email' | 'Print'
}

const ShareButton: React.FC<Props & AscCore.Button.Props> = ({
  children,
  onClick,
  type,
  ...otherProps
}) => (
  <AscCore.Button.ShareButton
    onClick={onClick}
    aria-label={type}
    type={type}
    {...otherProps}
    square
  >
    <Icon color="secondary" size={30}>
      {(() => {
        switch (type) {
          case 'Facebook':
            return <Facebook id={type} />
          case 'Twitter':
            return <Twitter id={type} />
          case 'Linkedin':
            return <Linkedin id={type} />
          case 'Email':
            return <Email id={type} />
          case 'Print':
            return <Print id={type} />
          default:
            return children
        }
      })()}
    </Icon>
  </AscCore.Button.ShareButton>
)

export default ShareButton
