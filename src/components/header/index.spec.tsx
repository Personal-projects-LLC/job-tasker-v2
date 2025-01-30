import React from 'react';
import { render } from '@testing-library/react';
import { expect } from '@jest/globals';


import { Header } from './index';

describe('Header component testing with testing-library', () => {
  const { getByTestId } = render(<Header />);

  const container = getByTestId('container');

  it('renders without crashing', () => {
    expect(container.parentElement).toBeTruthy();
  });

  it('renders successfuly next.js logo', () => {
    expect(container.firstChild).toBeDefined();
  });
});
