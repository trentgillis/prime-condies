import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import logo from '@/public/logo.svg';

const LogoWrapper = styled.div`
  position: relative;
  width: 164px;
  height: 20px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    width: 197px;
    height: 24px;
  }
`;

export function Logo() {
  return (
    <LogoWrapper>
      <Link href="https://www.google.com/">
        <Image src={logo} alt="logo" fill priority sizes="100vh" />
      </Link>
    </LogoWrapper>
  );
}
