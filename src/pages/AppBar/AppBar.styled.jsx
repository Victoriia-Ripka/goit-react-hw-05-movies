import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: solid 3px black;
`;

export const Nav = styled.nav`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  padding: 5px;
  font-weight: 700;

  &.active {
    color: orange;
  }

  :hover:not(.active) {
    border-radius: 3px;
    color: white;
    background-color: orange;
  }
`;
