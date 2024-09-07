import styles from './Title.module.scss';

import React from 'react';

function H1({ children }: React.PropsWithChildren) {
  return <h1 className={`${styles.title} ${styles.h1}`}>{children}</h1>;
}

function H2({ children }: React.PropsWithChildren) {
  return <h2 className={`${styles.title} ${styles.h2}`}>{children}</h2>;
}

function H3({ children }: React.PropsWithChildren) {
  return <h3 className={`${styles.title} ${styles.h3}`}>{children}</h3>;
}

function H4({ children }: React.PropsWithChildren) {
  return <h4 className={`${styles.title} ${styles.h4}`}>{children}</h4>;
}

function H5({ children }: React.PropsWithChildren) {
  return <h5 className={`${styles.title} ${styles.h5}`}>{children}</h5>;
}

function H6({ children }: React.PropsWithChildren) {
  return <h6 className={`${styles.title} ${styles.h6}`}>{children}</h6>;
}

const titleComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
};

interface TitleProps extends React.PropsWithChildren {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

function Title({ variant, children }: TitleProps) {
  const TitleComponent = titleComponents[variant] ?? H1;

  return <TitleComponent>{children}</TitleComponent>;
}

export default Title;
