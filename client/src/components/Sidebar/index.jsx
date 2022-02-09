import React from "react";
import {
  NavSearch,
  NavSearchWrap,
  SearchInput,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarWrapper>
          <SidebarMenu onClick={toggle}>
            <SidebarLink to="/countries">Countries</SidebarLink>
            <SidebarLink to="/activity/create">Create Activity</SidebarLink>
          </SidebarMenu>
          <NavSearch>
            <NavSearchWrap>
              <SearchInput />
            </NavSearchWrap>
          </NavSearch>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
