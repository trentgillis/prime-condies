import { Lato } from 'next/font/google';

import styled, { css } from 'styled-components';

type HeaderProps = {
  variant: 'H1';
  children: React.ReactNode;
};

const BaseStyles = css`
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

const H1 = styled.h1`
  ${BaseStyles};

  font-size: 2.5rem;
`;

const lato = Lato({ weight: '700', subsets: ['latin'] });

const headerVariants = {
  H1,
};

export function Header({ variant, children }: HeaderProps) {
  const HeaderVariantComponent = headerVariants[variant];

  return <HeaderVariantComponent className={lato.className}>{children}</HeaderVariantComponent>;
}
