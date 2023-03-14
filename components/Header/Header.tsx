import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.main`
  height: 130px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const LogoWrapper = styled.main`
  display: flex;
  height: 36px;
  width: 152px;
  align-items: left;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 33.3333%;
  flex-basis: 200px;
  display: flex;
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
    <HeaderWrapper>
      <LogoWrapper>
        <img src="/logo.svg" alt="" />
      </LogoWrapper>
      <SearchWrapper>
        <input type="text" placeholder="Search" />
      </SearchWrapper>
    </HeaderWrapper>
  );
}
