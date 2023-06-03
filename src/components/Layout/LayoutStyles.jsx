import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #766a92;
  padding: 26px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  text-transform: uppercase;

  color: #373737;
  border-bottom: 1px solid #2f0a3e;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-right: 24px;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #ebd8ff;
  font-weight: bold;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #5cd3a8;
  }
  &.active {
    color: #5cd3a8;
    text-decoration: underline;
  }
`;

export const Main = styled.main`
  padding: 26px;
`;
