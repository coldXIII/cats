import { render, screen } from '@testing-library/react';
import BackButton from '@/src/components/ui/BackButton';

describe('BackButton', () => {
  it('should render button', () => {
    render(<BackButton />);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeInTheDocument();
  });
  it('should render image inside a button', () => {
    render(<BackButton />);
    const imageEl = screen.getByRole('img');
    expect(imageEl).toBeInTheDocument();
  });
});
