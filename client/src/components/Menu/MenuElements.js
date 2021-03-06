import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100vw;
  padding: 2rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #fff;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const Button = styled.button`
  background: #cadbe8;
  justify-content: center;
  border-radius: 3px;
  border: none;
  color: #2a4d5b;
  font-size: 1em;
  padding: 0.25em 1em;
`;

export const NoCountriesSearch = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #2a4d5b;
`;
