import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background: #2a4d5b;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #bdd4e7;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: #2a4d5b 2px solid;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #bdd4e7;
    color: #2a4d5b;
    border: #2a4d5b 2px solid;
    text-decoration: none;
  }
`;
