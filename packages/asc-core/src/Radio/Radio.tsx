import * as React from 'react';
import styled from 'styled-components'

const Radio = styled.input.attrs({
  type: 'radio'
})`
  cursor: pointer;
  height: 28px;
  margin: 0;
  width: 28px;
`

const Label = styled.label`
`

const Wrapper = (props: any) => (
  <div>
    <Radio
      id={props.id}
      name={props.name}
      value={props.value}
    />
    <Label
      htmlFor={props.id}
    >{props.label}
    </Label>
  </div>
)

export default Wrapper
