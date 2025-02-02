import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sample } from './Sample';

describe('Sample Component', () => {
  it('renders successfully', () => {
    render(<Sample />);
    expect(screen.getByText('Sample Component')).toBeInTheDocument();
  });
});
