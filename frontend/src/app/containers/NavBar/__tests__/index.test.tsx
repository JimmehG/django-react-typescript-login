import * as React from 'react';
import { render } from '@testing-library/react';

import { NavBar } from '..';

const renderComponent = () => render(<NavBar />);

describe('<NavBar />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
