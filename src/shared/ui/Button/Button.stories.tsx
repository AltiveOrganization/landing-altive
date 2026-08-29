import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Смотреть проекты' },
};

export const Secondary: Story = {
  args: { children: 'Подробнее', variant: 'secondary' },
};

export const Ghost: Story = {
  args: { children: 'Закрыть', variant: 'ghost' },
};

export const Disabled: Story = {
  args: { children: 'Недоступно', disabled: true },
};

export const Loading: Story = {
  args: { children: 'Отправляем', loading: true },
};

export const WithIcons: Story = {
  args: {
    children: 'Следующий проект',
    iconLeft: <span>←</span>,
    iconRight: <span>→</span>,
  },
};

export const Small: Story = {
  args: { children: 'Маленькая', size: 'sm' },
};

export const Large: Story = {
  args: { children: 'Большая', size: 'lg' },
};

export const FullWidth: Story = {
  args: { children: 'На всю ширину', fullWidth: true },
  decorators: [
    (Story) => (
      <div style={{ width: 480, maxWidth: '80vw' }}>
        <Story />
      </div>
    ),
  ],
};
