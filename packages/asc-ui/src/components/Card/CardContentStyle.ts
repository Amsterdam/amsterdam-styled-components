import styled from 'styled-components'
import ParagraphStyle from '../Paragraph/ParagraphStyle'

const CardContentStyle = styled.div`
  width: 100%;
  min-height: 90px;
  padding: 24px 16px;

  ${ParagraphStyle} {
    margin-bottom: 0;
  }
`
export default CardContentStyle
