import styled from 'styled-components';

import { Logo, SearchBar } from '@/components';

const Wrapper = styled.nav`
  height: 130px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px;
  @media only screen and (min-width: 768px) {
    height: 80px;
    display: grid;
    margin-left: 80px;
    grid-template-columns: 179px minmax(auto, 768px) 1fr;
    ${Logo} {
      grid-column: 1;
    }
    ${SearchBar} {
      grid-column: 2;
    }
  }
`;

export function Header() {
  return (
    <Wrapper>
      <Logo />
      <SearchBar />
    </Wrapper>
  );
}
