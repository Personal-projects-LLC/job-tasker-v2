import React from 'react';
import { render } from '@testing-library/react';
import { expect } from '@jest/globals';

import { Logo } from './index';

describe('Logo component testing with testing-library', () => {
  const component = render(<Logo />);

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });
});
