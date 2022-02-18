import styled from "styled-components";

export const ActivitiesContainer = styled.div`
  width: 100vw;
  min-height: auto;
  padding: 2rem calc((100vw - 1000px) / 2);
  background: #fff;
  color: #fff;
`;

export const ActivitiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const Card = styled.div`
  margin: 0 1rem;
  line-height: 2;
  background: white;
  text-decoration: none;
  border: 1px solid #cadbe8;
  margin-bottom: 30px;
  /* max-width: 350px; */
  min-width: 350px;
  box-shadow: 0px 0px 10px 10px rgba(202, 219, 232, 1);
  /* &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 0px 0px 10px 3px rgba(202, 219, 232, 1);
  } */
`;

export const CardH1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #2a4d5b;

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
