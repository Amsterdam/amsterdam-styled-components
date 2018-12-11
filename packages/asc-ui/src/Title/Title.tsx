import { default as styled } from '../custom-theme'
import theme from '../theme'

interface IProps {
  theme: theme
}

const Title = styled.h1`
  margin-top: 20px;
  color: ${(props: IProps) => props.theme.primaryColor};
`

export default Title
