import * as React from 'react';
import styled from 'styled-components'

import Radio from '../Radio';


const Wrapper = styled.div`
`
const Radios = (props: any) => (
  <Wrapper>
    {props.children.map(radio =>
      <Radio
        id={`${props.name}-${radio.props.value}`}
        key={`${props.name}-${radio.props.value}`}
        name={props.name}
        value={radio.props.value}
        label={radio.props.label}
        defaultChecked={radio.props.defaultChecked}
        disabled={radio.props.disabled}
      />
    )}
  </Wrapper>
)

export default Radios
