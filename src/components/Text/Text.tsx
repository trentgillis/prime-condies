import styles from './Text.module.scss';

import React from 'react';

function TextMd({ children }: React.PropsWithChildren) {
  return <p className={`${styles.text} ${styles.md}`}>{children}</p>;
}

function TextSm({ children }: React.PropsWithChildren) {
  return <p className={`${styles.text} ${styles.sm}`}>{children}</p>;
}

function TextXs({ children }: React.PropsWithChildren) {
  return <p className={`${styles.text} ${styles.xs}`}>{children}</p>;
}

const textComponents = {
  md: TextMd,
  sm: TextSm,
  xs: TextXs,
};

interface TextProps extends React.PropsWithChildren {
  size?: 'md' | 'sm' | 'xs';
}

function Text({ size = 'md', children }: TextProps) {
  const TextComponent = textComponents[size];

  return <TextComponent>{children}</TextComponent>;
}

export default Text;
