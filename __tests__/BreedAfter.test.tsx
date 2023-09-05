import { render, screen } from '@testing-library/react';
import BreedAfter from '@/src/components/ui/BreedAfter';
import { cat } from '@/src/constants';

const cat1 = {
  id: '666',
  url: 'www.qwer.ty',
  breeds: [],
};

describe('BreedAfter', () => {
  it('should not render name without breeds', () => {
    render(<BreedAfter cat={cat1} />);
    const spanEl = screen.queryByText('Cat');
    expect(spanEl).not.toBeInTheDocument();
  });
  it('should render name of breed', () => {
    render(<BreedAfter cat={cat} />);
    const spanEl = screen.getByText('abyssinian');
    expect(spanEl).toBeInTheDocument();
  });
});
