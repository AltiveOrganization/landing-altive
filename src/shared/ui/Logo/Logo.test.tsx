import { render, screen } from '@testing-library/react';

import { Logo } from './Logo';

describe('Logo', () => {
  it('renders the Altive wordmark as a level-three heading', () => {
    render(<Logo />);

    expect(screen.getByRole('heading', { level: 3, name: 'ALTIVE°' })).toBeInTheDocument();
  });
});
