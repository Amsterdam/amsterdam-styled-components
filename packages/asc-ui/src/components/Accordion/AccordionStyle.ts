import styled from '@datapunt/asc-core'
import Button from '../Button'
import { IconStyle } from '../Icon'
import { themeColor, themeSpacing } from '../../utils/themeUtils'

export type Props = {
  isOpen?: boolean
}

const AccordionContent = styled.div<Props>`
  transition: border-color 0.1s ease-in-out;
  border: 2px solid ${themeColor('tint', 'level3')};
  border-top: none;
  padding: ${themeSpacing(4, 5)};
  display: ${({ isOpen }) => !isOpen && 'none'};
`

const AccordionButtonContent = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 20px;
`

const AccordionButton = styled(Button)<Props>`
  width: 100%;
  background-color: ${themeColor('tint', 'level3')};
  padding-left: ${themeSpacing(5)};
  padding-right: ${themeSpacing(5)};

  &:hover,
  /* double ampersand to override this style */
  &&:focus {
    background-color: ${themeColor('tint', 'level4')};

    & + ${AccordionContent} {
      border-color: ${themeColor('tint', 'level4')};
    }
  }

  ${IconStyle} {
    margin-left: auto;
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
    transition: transform 0.3s ease;
  }
`

export { AccordionButton, AccordionContent, AccordionButtonContent }
