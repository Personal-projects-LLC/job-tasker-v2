import { fireEvent, render } from '@testing-library/react';
import { expect } from '@jest/globals';


import { Container } from './index';

describe('Container component testing with testing-library', () => {
  const component = render(
    <Container>
      <div>Test content</div>
    </Container>
  );

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });
});
