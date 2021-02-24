import {
  useState,
  useContext,
  useEffect,
  forwardRef,
  HTMLAttributes,
} from 'react'
import RadioStyle, {
  RadioWrapperStyle,
  RadioCircleStyle,
  RadioFocusStyle,
  Props,
} from './RadioStyle'
import RadioContext from './RadioContext'
import LabelContext from '../Label/LabelContext'

const Radio = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(
  (
    {
      className,
      onChange,
      disabled,
      id,
      checked: defaultChecked,
      error: errorProp,
      value,
      ...otherProps
    },
    ref,
  ) => {
    const [focus, setFocus] = useState(false)
    const {
      setChecked,
      checked: checkedProp,
      name,
      error: errorGroup,
    } = useContext(RadioContext)
    const { setActive } = useContext(LabelContext)
    const checked = checkedProp === id
    const error = errorProp || errorGroup || false

    // Make the label aware of changes in the checked state
    useEffect(() => {
      setActive(checked)
    }, [checked, setActive])

    // Pass default `checked` to RadioGroup on load and when `id` changes
    useEffect(() => {
      if (defaultChecked) setChecked(id)
    }, [id, defaultChecked, setChecked])

    return (
      <RadioWrapperStyle
        {...{
          focus,
          error,
          className,
          disabled,
          checked,
        }}
        aria-disabled={disabled}
      >
        <RadioCircleStyle
          {...{
            error,
            disabled,
            focus,
            checked,
          }}
        />
        <RadioStyle
          {...{
            ...otherProps,
            disabled,
            id,
            name,
            value,
            checked,
            ref,
          }}
          onFocus={() => {
            setFocus(true)
          }}
          onBlur={() => setFocus(false)}
          onChange={(e) => {
            if (onChange) {
              onChange(e)
            }
            setChecked(e.target.id)
          }}
        />
        <RadioFocusStyle />
      </RadioWrapperStyle>
    )
  },
)

export default Radio
