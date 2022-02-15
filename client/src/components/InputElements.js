import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  color: #2a4d5b;
  font-size: 1em;
  border: 2px solid #cadbe8;
  padding: 0.25em 1em;
`;

export const Select = styled.select`
  color: #2a4d5b;
  font-size: 1em;
  border: 2px solid #cadbe8;
  padding: 0.25em 1em;
  background: #cadbe8;
  margin: 0 0.5rem;
`;

export const TextMenu = styled.h2`
  color: #2a4d5b;
  font-size: 1em;
  padding: 0.25em 1em;
  /* margin: 0 1rem; */
  margin-right: -0.9rem;
`;
