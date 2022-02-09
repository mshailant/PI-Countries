import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #2a4d5b;
  height: 80px;
  //margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid green;
  }
`;

export const NavSearch = styled.nav`
  top: 50%;
  height: 36px;
  position: relative;
  transform: translate(0, -50%);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavSearchWrap = styled.div`
  width: 220px;
  height: 36px;
  position: relative;
  background: rgba(179, 191, 201, 0.15);
  box-sizing: border-box;
  line-height: 33px;
  padding-left: 37px;
  border-radius: 19px;
`;

export const SearchIcon = styled.div`
  top: 10%;
  left: 10px;
  width: 16px;
  height: 16px;
  content: "";
  position: absolute;
  color: white;
`;

export const SearchInput = styled.input`
  color: #ffffff;
  width: 170px;
  border: transparent;
  font-size: 16px;
  background: transparent;
  outline: none;

  &::placeholder {
    color: #ffffff;
  }
`;
