import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: white;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;
  cursor: pointer;

  &:hover {
    color: green;
    transition: 0.2s ease-in-out;
  }
`;

export const NavSearch = styled.nav`
  //position: absolute;
  top: -70px;
  display: flex;
  align-items: center;
  justify-content: center;
  //top: 60%;
  height: 36px;
  position: relative;
  transform: translate(0, -50%);
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
