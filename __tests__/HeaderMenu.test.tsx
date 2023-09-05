import { render, screen } from '@testing-library/react';
import HeaderMenu from '@/src/components/menus/HeaderMenu';

describe('HeaderMenu', () => {
  it('should render input', () => {
    render(<HeaderMenu />);
    const inputEl = screen.getByPlaceholderText('Search for breeds by name');
    expect(inputEl).toBeInTheDocument();
  });
  it('should render buttons', () => {
    render(<HeaderMenu />);
    const buttonsEl = screen.getAllByRole('button');
    expect(buttonsEl).toHaveLength(4);
  });
});
