import React from "react";
import { MenuContainer, MenuWrapper, Button } from "./MenuElements";
import { Input, Select, TextMenu } from "../InputElements";

const Menu = () => {
  return (
    <>
      <MenuContainer>
        <MenuWrapper>
          <Input placeholder="Search" />
          <Button>&#128269;</Button>
          <TextMenu>Filter By Region</TextMenu>
          <Select>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </Select>
          <TextMenu>Sort By</TextMenu>
          <Select>
            <option value="acd">A..Z &#129045;</option>
            <option value="dec">Z..A &#129047;</option>
            <option value="pacd">Population &#129045;</option>
            <option value="pdec">Population &#129047;</option>
          </Select>
        </MenuWrapper>
      </MenuContainer>
    </>
  );
};

export default Menu;
