import { render, screen } from '@testing-library/react';

import { Text } from './Text';

describe('Text', () => {
  it('renders body text as a paragraph by default', () => {
    render(<Text>Project description</Text>);

    expect(screen.getByText('Project description').tagName).toBe('P');
  });

  it.each([
    ['h1', 'H1'],
    ['h2', 'H2'],
    ['h3', 'H3'],
    ['bodyLarge', 'P'],
    ['body', 'P'],
    ['caption', 'SPAN'],
    ['small', 'SPAN'],
  ] as const)('maps the %s variant to the correct semantic element', (variant, tagName) => {
    render(<Text variant={variant}>{variant}</Text>);

    expect(screen.getByText(variant).tagName).toBe(tagName);
  });

  it('supports a custom semantic element', () => {
    render(
      <Text as="div" variant="h2">
        Visual heading
      </Text>,
    );

    expect(screen.getByText('Visual heading').tagName).toBe('DIV');
  });

  it('forwards HTML attributes and preserves a custom class name', () => {
    render(
      <Text className="intro" data-testid="intro" id="intro-copy">
        Intro
      </Text>,
    );

    expect(screen.getByTestId('intro')).toHaveAttribute('id', 'intro-copy');
    expect(screen.getByTestId('intro')).toHaveClass('intro');
  });
});
