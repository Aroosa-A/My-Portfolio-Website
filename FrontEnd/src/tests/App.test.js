import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders Home component', () => {
  render(<App />);
  const image = screen.getByTestId('mainHomeImage');
  expect(image).toBeInTheDocument();
});
