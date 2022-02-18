import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardLink = styled(Link)`
  text-decoration: none;
`;

export const Card = styled.div`
  margin: 0 1rem;
  line-height: 2;
  /* width: 301px; */
  background: white;
  text-decoration: none;
  border: 1px solid #cadbe8;
  margin-bottom: 30px;
  max-width: 302px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 0px 0px 10px 3px rgba(202, 219, 232, 1);
  }
`;

export const CardImg = styled.img`
  min-height: 200px;
  max-height: 200px;
  min-width: 300px;
  max-width: 300px;
`;

export const CardH1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #2a4d5b;
  /* margin-bottom: 20px; */

  @media screen and (max-height: 480px) {
    font-size: 2rem;
  }
`;

export const CardH2 = styled.h1`
  text-align: center;
  font-size: 1rem;
  color: #2a4d5b;
  margin-top: 10px;
  margin-bottom: 20px;

  @media screen and (max-height: 480px) {
    font-size: 2rem;
  }
`;
