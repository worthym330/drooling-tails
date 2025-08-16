import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ffecf1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%; /* Ensure it spans the full width of the viewport */
  box-sizing: border-box; /* Include padding and border in width calculation */
  margin: 0; /* Remove default margins */
`;

const Title = styled.h1`
  color: #c49863;
  font-family: 'Comic Sans MS', sans-serif;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto; /* Ensure navigation is pushed to the right */
`;

const NavLink = styled.a`
  margin: 0 15px;
  color: #c49863;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Title>
      <a href="/" style={{ color: '#c49863', textDecoration: 'none' }}>
        DroolingTails
      </a>
    </Title>
    <Nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/products">Products</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;
