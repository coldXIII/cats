import { render, screen } from '@testing-library/react';
import BreedTitle from '@/src/components/ui/BreedTitle';

describe('BreedTitle', () => {
  it('should not render name without breeds', () => {
    render(<BreedTitle breed={'Behemoth'} />);
    const spanEl = screen.getByText('Behemoth');
    expect(spanEl).toBeInTheDocument();
  });
});
