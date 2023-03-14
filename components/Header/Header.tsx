import styled from 'styled-components';

import { Logo } from '@/components';

const Wrapper = styled.nav`
  height: 130px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const SearchWrapper = styled.main`
  display: flex;
  height: 46px;
  width: 100%;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 0;

  flex-basis: 200px;
  display: flex;
`;

export function Header() {
  return (
    <Wrapper>
      <Logo />
      <SearchWrapper>
        <input type="text" placeholder="Search" />
      </SearchWrapper>
    </Wrapper>
  );
}
