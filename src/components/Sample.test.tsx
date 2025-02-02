import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sample } from './Sample';

describe('Sample Component', () => {
  it('should render successfully', () => {
    render(<Sample />);
    const heading = screen.getByRole('heading', { name: /sample component/i });
    expect(heading).toBeInTheDocument();
  });
});
