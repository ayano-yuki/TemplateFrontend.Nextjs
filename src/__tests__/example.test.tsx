import { render, screen } from '@testing-library/react';

test('basic test', () => {
  render(<div>Hello</div>);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
