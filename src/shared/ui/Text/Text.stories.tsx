import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text } from './Text';

const meta = {
  title: 'Shared/Text',
  component: Text,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { children: 'Altive creates digital products' },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingOne: Story = {
  args: { variant: 'h1' },
};

export const HeadingTwo: Story = {
  args: { variant: 'h2' },
};

export const HeadingThree: Story = {
  args: { variant: 'h3' },
};

export const BodyLarge: Story = {
  args: { variant: 'bodyLarge' },
};

export const Body: Story = {
  args: { variant: 'body' },
};

export const Caption: Story = {
  args: { variant: 'caption' },
};

export const Small: Story = {
  args: { variant: 'small' },
};

export const SemanticOverride: Story = {
  args: {
    as: 'p',
    variant: 'h2',
    children: 'Looks like a heading, remains a paragraph',
  },
};

export const TypographyScale: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, maxWidth: 960 }}>
      <Text variant="h1">Heading one</Text>
      <Text variant="h2">Heading two</Text>
      <Text variant="h3">Heading three</Text>
      <Text variant="bodyLarge">Large body text</Text>
      <Text variant="body">Regular body text</Text>
      <Text variant="caption">Caption text</Text>
      <Text variant="small">Small text</Text>
    </div>
  ),
};
