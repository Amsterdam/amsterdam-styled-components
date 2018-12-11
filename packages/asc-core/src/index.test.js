import React from 'react'
import { Button, ButtonBar } from '.';
import { mount } from 'enzyme';

describe('Styled components', () => {
  it('should render buttons', () => {
    const component = mount(
      <div>
        <ButtonBar>
          <Button color="primary" />
          <Button color="secondary" />
        </ButtonBar>
      </div>
    )
    expect(component).toMatchSnapshot()
  });
});
