import * as React from 'react';
import styled from 'styled-components'

const Radio = styled.input.attrs({
  type: 'radio'
})`
  cursor: pointer;
  height: 28px;
  left: 0;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 28px;
`

const Label = styled.label`
  color: ${props => props.disabled ? '#bebebe' : '#000'};
  padding-left: 38px;
  line-height: 28px;

  &:before {
    border-radius: 50%;
    border: ${props => props.disabled ? '1px solid #bebebe' : '1px solid #000'};
    content: "";
    height: calc(28px - 2px);
    left: 0;
    position: absolute;
    top: 0;
    width: calc(28px - 2px);
  }

  &:after {
    background-color: #0000;
    border: 6px solid;
    border-radius: 50%;
    color: ${props => props.disabled ? '#bebebe' : '#000'};
    content: "";
    height: 0;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 7px;
    width: 0;
    zoom: 1;
  }
`

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 10px;

  input:checked + label:after {
    opacity: 1;
  }
`

const InputRadio = (props: any) => (
  <Wrapper>
    <Radio
      id={props.id}
      name={props.name}
      value={props.value}
      defaultChecked={props.defaultChecked}
      disabled={props.disabled}
    />
    <Label
      htmlFor={props.id}
      disabled={props.disabled}
    >{props.label}
    </Label>
  </Wrapper>
)

export default InputRadio
