import styles from './Title.module.scss';

import React from 'react';

interface HeaderTagProps extends React.PropsWithChildren {
  className: string;
}

function H1({ className, children }: HeaderTagProps) {
  return <h1 className={`${styles.title} ${styles.h1} ${className}`}>{children}</h1>;
}

function H2({ className, children }: HeaderTagProps) {
  return <h2 className={`${styles.title} ${styles.h2} ${className}`}>{children}</h2>;
}

function H3({ className, children }: HeaderTagProps) {
  return <h3 className={`${styles.title} ${styles.h3} ${className}`}>{children}</h3>;
}

function H4({ className, children }: HeaderTagProps) {
  return <h4 className={`${styles.title} ${styles.h4} ${className}`}>{children}</h4>;
}

function H5({ className, children }: HeaderTagProps) {
  return <h5 className={`${styles.title} ${styles.h5} ${className}`}>{children}</h5>;
}

function H6({ className, children }: HeaderTagProps) {
  return <h6 className={`${styles.title} ${styles.h6} ${className}`}>{children}</h6>;
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
  className?: string;
}

function Title({ variant, className, children }: TitleProps) {
  const TitleComponent = titleComponents[variant] ?? H1;

  return <TitleComponent className={className ? className : ''}>{children}</TitleComponent>;
}

export default Title;
