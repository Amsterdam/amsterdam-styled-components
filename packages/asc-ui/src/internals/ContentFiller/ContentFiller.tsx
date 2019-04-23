import * as React from 'react'
import { getBreakpointFromTheme } from '../../styles/utils'
import styled from '../../styled-components'
import Typography from '../../components/Typography'

type ContentFillerStyleProps = {
  backgroundColor?: string
  marginTop?: string
  maxWidth?: string
  headerSize?: 'tall' | 'short'
}

const ContentFillerStyle = styled.div<ContentFillerStyleProps>`
  width: 100%;
  height: 2000px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ marginTop }) => marginTop};
  max-width: ${({ maxWidth }) => maxWidth};

  @media screen and ${({ theme }) =>
      getBreakpointFromTheme(theme, 'min-width', 'laptop')} {
    margin-top: ${({ headerSize, marginTop }) =>
      headerSize === 'short' ? marginTop : '0px'};
  }
`

ContentFillerStyle.defaultProps = {
  backgroundColor: 'rgba(211,211,211,.1)',
  marginTop: '50px',
  maxWidth: 'none',
  headerSize: 'short',
}

type ContentFillerProps = ContentFillerStyleProps

const ContentFiller: React.FC<ContentFillerProps> = ({ ...otherProps }) => (
  <ContentFillerStyle {...otherProps}>
    <Typography element="h5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque
      adipiscing commodo elit at imperdiet dui. Mi in nulla posuere sollicitudin
      aliquam ultrices sagittis orci a. Nam aliquam sem et tortor consequat id
      porta nibh. Id aliquet risus feugiat in ante. Habitasse platea dictumst
      quisque sagittis purus sit. Mauris a diam maecenas sed enim ut sem. Nulla
      facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Vulputate enim
      nulla aliquet porttitor lacus luctus accumsan tortor posuere. Amet tellus
      cras adipiscing enim eu turpis. Ultrices mi tempus imperdiet nulla
      malesuada. Dolor magna eget est lorem. Donec ultrices tincidunt arcu non
      sodales neque. Ac turpis egestas sed tempus. Sed enim ut sem viverra
      aliquet eget sit amet. Proin sed libero enim sed faucibus. Commodo nulla
      facilisi nullam vehicula ipsum a arcu. Id consectetur purus ut faucibus
      pulvinar elementum integer. Et tortor consequat id porta. Praesent
      elementum facilisis leo vel.
    </Typography>
    <Typography element="p">
      Urna condimentum mattis pellentesque id nibh tortor id aliquet. Viverra
      vitae congue eu consequat ac felis donec. Id diam maecenas ultricies mi
      eget mauris pharetra et ultrices. Magna eget est lorem ipsum. Fusce id
      velit ut tortor pretium. Elementum facilisis leo vel fringilla est
      ullamcorper eget nulla. Elementum curabitur vitae nunc sed velit dignissim
      sodales. Tristique nulla aliquet enim tortor at auctor. Tristique senectus
      et netus et malesuada fames ac turpis. Magna fermentum iaculis eu non
      diam. Nullam vehicula ipsum a arcu. Libero volutpat sed cras ornare arcu
      dui vivamus arcu felis. Feugiat nisl pretium fusce id velit ut. Platea
      dictumst quisque sagittis purus sit amet. Nullam non nisi est sit. Massa
      tincidunt dui ut ornare lectus sit amet est placerat. Fames ac turpis
      egestas integer eget. Fringilla phasellus faucibus scelerisque eleifend
      donec pretium vulputate sapien nec. Cras semper auctor neque vitae tempus
      quam. Condimentum id venenatis a condimentum vitae. Bibendum at varius vel
      pharetra vel. Id faucibus nisl tincidunt eget nullam non. Fames ac turpis
      egestas sed tempus. Mauris ultrices eros in cursus turpis massa. Neque
      vitae tempus quam pellentesque nec. Nibh tellus molestie nunc non blandit.
      Amet cursus sit amet dictum sit amet justo donec enim. Vitae justo eget
      magna fermentum iaculis eu non diam phasellus. Justo laoreet sit amet
      cursus sit amet dictum sit amet. Tristique nulla aliquet enim tortor at
      auctor. At auctor urna nunc id cursus metus aliquam eleifend. Eros donec
      ac odio tempor orci dapibus ultrices. Commodo nulla facilisi nullam
      vehicula ipsum a. Convallis posuere morbi leo urna molestie at elementum
      eu. Vel facilisis volutpat est velit. Facilisi cras fermentum odio eu
      feugiat pretium nibh. Suspendisse interdum consectetur libero id faucibus
      nisl tincidunt eget. Metus dictum at tempor commodo. Feugiat nisl pretium
      fusce id velit ut tortor pretium. Morbi tristique senectus et netus et
      malesuada. Eget aliquet nibh praesent tristique magna sit. Volutpat
      blandit aliquam etiam erat velit scelerisque in dictum. In fermentum et
      sollicitudin ac. Vel facilisis volutpat est velit egestas dui id ornare
      arcu. Sapien faucibus et molestie ac feugiat. Erat imperdiet sed euismod
      nisi. Porttitor massa id neque aliquam vestibulum. Feugiat nibh sed
      pulvinar proin. Aliquam etiam erat velit scelerisque. Eu turpis egestas
      pretium aenean pharetra.
    </Typography>
  </ContentFillerStyle>
)

export default ContentFiller
