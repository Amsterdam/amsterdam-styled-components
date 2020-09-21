import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import FormLabelStyle from '../FormLabelStyle'
import SelectStyle, {
  AbsoluteContentWrapper,
  Props,
  SelectedValue,
  SelectIcon,
  SelectWrapper,
} from './SelectStyle'

/**
 * Gets a list of the selected `<option>` elements which are present inside of a `<select>`.
 *
 * @param select The `<select>` element of which to get the selected options.
 */
function getSelectedOptions(select: HTMLSelectElement) {
  if (select.selectedOptions) {
    return Array.from(select.selectedOptions)
  }

  // The 'selectedOptions' property is not supported (IE11)
  return Array.from(select.querySelectorAll<HTMLOptionElement>(':checked'))
}

const Select = React.forwardRef<
  HTMLSelectElement,
  Props & React.HTMLAttributes<HTMLSelectElement>
>(
  (
    {
      id,
      value,
      label,
      srOnly: srOnlyProp,
      error,
      labelStyle,
      onChange,
      children,
      disabled,
      ...otherProps
    },
    externalRef,
  ) => {
    const srOnly = srOnlyProp || false
    const [selectedValue, setSelectedValue] = useState('')
    const ref = useRef<HTMLSelectElement>(null)

    const updateValue = useCallback((select: HTMLSelectElement) => {
      const selectedOption: HTMLOptionElement | undefined = getSelectedOptions(
        select,
      )[0]

      if (selectedOption?.textContent) {
        setSelectedValue(selectedOption.textContent)
      }
    }, [])

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        updateValue(event.target)

        if (onChange) {
          onChange(event)
        }
      },
      [onChange],
    )

    useImperativeHandle(externalRef, () => ref.current as HTMLSelectElement)

    useEffect(() => {
      if (ref.current) {
        updateValue(ref.current)
      }
    }, [ref])

    return (
      <>
        {label && (
          <FormLabelStyle
            srOnly={srOnly}
            htmlFor={id}
            label={label}
            style={labelStyle}
          >
            {label}
          </FormLabelStyle>
        )}
        <SelectWrapper>
          <SelectStyle
            {...{
              ...otherProps,
              id,
              value,
              error,
            }}
            disabled={disabled}
            error={error}
            ref={ref}
            onChange={handleChange}
          >
            {children}
          </SelectStyle>
          <AbsoluteContentWrapper>
            <SelectedValue data-testid="selectedValue" disabled={disabled}>
              {selectedValue}
            </SelectedValue>
            <SelectIcon />
          </AbsoluteContentWrapper>
        </SelectWrapper>
      </>
    )
  },
)

export default Select
