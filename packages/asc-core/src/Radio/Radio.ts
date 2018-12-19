import * as React from 'react';
import styled from 'styled-components'

const Radio = styled.input.attrs({
  type: 'radio',
})`
  cursor: pointer;
  height: 28px;
  margin: 0;
  width: 28px;
`

const Label = styled.label.attrs({
  id: 'foo',
})`
  cursor: pointer;
  height: 28px;
  margin: 0;
  width: 28px;
`

const Wrapper = (props: any) => (
  <div>
    <Radio />
    <Label />
  </div>
)

export default Wrapper
