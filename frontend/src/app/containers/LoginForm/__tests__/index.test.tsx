import * as React from 'react';
import { render } from '@testing-library/react';

import { LoginForm } from '..';

const renderComponent = () => render(<LoginForm />);

describe('<LoginForm />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
