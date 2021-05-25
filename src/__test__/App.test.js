import { render, screen } from '@testing-library/react';
import RecipeBook from './components/app';

test('renders learn react link', () => {
  render(<RecipeBook />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
