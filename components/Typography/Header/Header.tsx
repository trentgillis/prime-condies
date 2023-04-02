import { Lato } from 'next/font/google';

import styled, { css } from 'styled-components';

type HeaderProps = {
  variant: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  children: React.ReactNode;
};

const BaseStyles = css`
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

const H1 = styled.h1`
  ${BaseStyles};

  font-size: 2.5rem;
`;

const H2 = styled.h2`
  ${BaseStyles};

  font-size: 2rem;
`;

const H3 = styled.h3`
  ${BaseStyles};

  font-size: 1.5rem;
`;

const H4 = styled.h4`
  ${BaseStyles};

  font-size: 1.25rem;
`;

const H5 = styled.h5`
  ${BaseStyles};

  font-size: 1rem;
`;

const H6 = styled.h6`
  ${BaseStyles};

  font-size: 0.875rem;
`;

const lato = Lato({ weight: '700', subsets: ['latin'] });

const headerVariants = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};

export function Header({ variant, children }: HeaderProps) {
  const HeaderVariantComponent = headerVariants[variant];

  return <HeaderVariantComponent className={lato.className}>{children}</HeaderVariantComponent>;
}
