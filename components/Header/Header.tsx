import styled from 'styled-components';

import { Logo, SearchBar } from '@/components';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 16px 0 16px;
  min-width: 200px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding: 0;
    justify-content: flex-end;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 16px;
  min-width: 200px;
`;

const Wrapper = styled.nav`
  height: 130px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    height: 80px;
    display: grid;
    grid-template-columns: 1fr minmax(auto, ${({ theme }) => theme.breakpoint}) 1fr;
    margin-left: 16px;

    ${LogoWrapper} {
      grid-column: 1;
    }

    ${SearchWrapper} {
      grid-column: 2;
    }
  }
`;

export function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>
    </Wrapper>
  );
}
