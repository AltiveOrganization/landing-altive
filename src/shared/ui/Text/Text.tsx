import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './Text.module.scss';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'bodyLarge' | 'body' | 'caption' | 'small';

export type TextProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  variant?: TextVariant;
  as?: ElementType;
};

const defaultTags: Record<TextVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  bodyLarge: 'p',
  body: 'p',
  caption: 'span',
  small: 'span',
};

export function Text({ children, variant = 'body', as, className, ...props }: TextProps) {
  const Component = as ?? defaultTags[variant];

  const classes = [styles.text, styles[variant], className].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
