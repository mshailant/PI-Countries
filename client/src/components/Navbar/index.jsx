import React from "react";
import {
  Nav,
  NavbarContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  NavSearch,
  NavSearchWrap,
  SearchInput,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">HenryCountries</NavLogo>
          {/* <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon> */}
          <NavMenu>
            <NavItem>
              <NavLink to="/countries">Countries</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/activity/create">Create Activity</NavLink>
            </NavItem>
          </NavMenu>
          <NavSearch>
            <NavSearchWrap>
              {/* <SearchIcon>
                <FaSearch />
              </SearchIcon> */}
              <SearchInput />
            </NavSearchWrap>
          </NavSearch>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
