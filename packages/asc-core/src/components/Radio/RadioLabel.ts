import styled from '../../styled-components'
import getThemeColor from '../../utils/getThemeColor'

type Props = {
  htmlFor: string
  disabled?: boolean
}

const Label = styled.label.attrs<Props>({
  htmlFor: ({ htmlFor }: Props) => htmlFor,
  disabled: ({ disabled }: Props) => disabled,
})<Props>`
  color: ${({ theme, disabled }) =>
    disabled
      ? getThemeColor(theme, 'tint', 'level4')
      : getThemeColor(theme, 'tint', 'level5')};
  font-family: 'AvenirNextLTW01-Regular', verdana, sans-serif;
  font-size: 16px;
  padding-left: 38px;
  line-height: 28px;

  &::before {
    border-radius: 50%;
    border: ${({ theme, disabled }) =>
      `1px solid ${
        disabled
          ? getThemeColor(theme, 'tint', 'level5')
          : getThemeColor(theme, 'tint', 'level7')
      }`};
    content: '';
    height: calc(28px - 4px);
    left: 0;
    position: absolute;
    top: 0;
    width: calc(28px - 4px);
    zoom: 1;
  }

  &::after {
    background-color: ${({ theme }) => getThemeColor(theme, 'tint', 'level7')};
    border: 8px solid;
    border-radius: 50%;
    color: ${({ theme, disabled }) =>
      disabled
        ? getThemeColor(theme, 'tint', 'level5')
        : getThemeColor(theme, 'tint', 'level7')};
    content: '';
    height: 0;
    left: 5px;
    opacity: 0;
    position: absolute;
    top: 5px;
    width: 0;
    zoom: 1;
  }

  input[type='radio']:checked + &::after {
    opacity: 1;
    zoom: 1;
  }
`
export default Label
