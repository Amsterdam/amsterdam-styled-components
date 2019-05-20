import styled from '@datapunt/asc-core'

interface Props {
  htmlFor: string
  disabled?: boolean
}

const RasdioLabelStyle = styled.label.attrs<Props>({
  htmlFor: ({ htmlFor }: Props) => htmlFor,
  disabled: ({ disabled }: Props) => disabled,
})<Props>`
  color: ${props => (props.disabled ? '#bebebe' : '#434343')};
  font-family: 'AvenirNextLTW01-Regular', verdana, sans-serif;
  font-size: 16px;
  padding-left: 38px;
  line-height: 28px;

  &::before {
    border-radius: 50%;
    border: ${props =>
      props.disabled ? '1px solid #bebebe' : '1px solid #000'};
    content: '';
    height: calc(28px - 4px);
    left: 0;
    position: absolute;
    top: 0;
    width: calc(28px - 4px);
    zoom: 1;
  }

  &::after {
    background-color: #0000;
    border: 6px solid;
    border-radius: 50%;
    color: ${props => (props.disabled ? '#bebebe' : '#000')};
    content: '';
    height: 0;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 7px;
    width: 0;
    zoom: 1;
  }

  input[type='radio']:checked + &::after {
    opacity: 1;
    zoom: 1;
  }
`
export default RasdioLabelStyle
