import { render, screen } from '@testing-library/react';
import MainLayout from '@/src/components/MainLayout';

describe('MainLayout', () => {
  it('should render text', () => {
    render(
      <MainLayout>
        <div>Test</div>
      </MainLayout>
    );
    const welcomeText = screen.getByText('Welcome to MacPaw Bootcamp 2023');
    const testText = screen.getByText('Test');
    expect(welcomeText).toBeInTheDocument();
    expect(testText).toBeInTheDocument();
  });

  it('should render main menu', () => {
    render(
      <MainLayout>
        <div>Test</div>
      </MainLayout>
    );
    const buttons = screen.getAllByRole('button');
    const images = screen.getAllByTestId('menu-image');
    expect(buttons).toHaveLength(3);
    expect(images).toHaveLength(3);
    expect(buttons[0]).toHaveTextContent('voting');
  });

  it('should render logo image', () => {
    render(
      <MainLayout>
        <div>Test</div>
      </MainLayout>
    );
    const image = screen.getByTestId('logo');
    expect(image).toBeInTheDocument();
  });
});
