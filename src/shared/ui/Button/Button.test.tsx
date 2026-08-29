import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Button', () => {
  it('renders as a button by default and forwards native attributes', () => {
    render(
      <Button aria-label="Save changes" data-testid="save-button">
        Save
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Save changes' });

    expect(button).toBe(screen.getByTestId('save-button'));
    expect(button).toHaveAttribute('type', 'button');
  });

  it('calls the click handler', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Continue</Button>);
    await user.click(screen.getByRole('button', { name: 'Continue' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call the click handler when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button disabled onClick={onClick}>
        Continue
      </Button>,
    );
    await user.click(screen.getByRole('button', { name: 'Continue' }));

    expect(onClick).not.toHaveBeenCalled();
  });

  it('disables the button while loading', () => {
    render(<Button loading>Saving</Button>);

    expect(screen.getByRole('button', { name: 'Saving' })).toBeDisabled();
  });

  it('renders decorative icons without adding them to the accessible name', () => {
    render(
      <Button
        iconLeft={<span data-testid="left-icon">←</span>}
        iconRight={<span data-testid="right-icon">→</span>}
      >
        Explore
      </Button>,
    );

    expect(screen.getByRole('button', { name: 'Explore' })).toBeInTheDocument();
    expect(screen.getByTestId('left-icon').parentElement).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByTestId('right-icon').parentElement).toHaveAttribute('aria-hidden', 'true');
  });

  it('preserves a custom class name', () => {
    render(<Button className="custom-button">Custom</Button>);

    expect(screen.getByRole('button', { name: 'Custom' })).toHaveClass('custom-button');
  });
});
