import React from 'react'
import styled from 'styled-components';

const HeaderWrapper = styled.main`
 height: 130px;

  display: grid;
  grid-template-columns: ;
`;
const LogoWrapper = styled.main`
  display: flex;
  height: 36px;
  width: 152px
  align-items: left;
`;
const SearchWrapper = styled.main`
  display: flex;
  height: 46px;

justify-content: center;
`;

function Header() {
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <img src="/logo.svg" alt="" />
            </LogoWrapper>
            <SearchWrapper>
                <input type="text" placeholder='Search' />
            </SearchWrapper>
        </HeaderWrapper>
    )
}

export default Header

