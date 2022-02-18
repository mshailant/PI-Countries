import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: white;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
`;

export const FormTitle = styled.h1`
  margin-bottom: 40px;
  color: #2a4d5b;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #2a4d5b;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 10px;
  border: 1px solid #2a4d5b;
  font-size: 1em;
`;

export const FormSelect = styled.select`
  padding: 16px 16px;
  margin-bottom: 10px;
  border: 1px solid #2a4d5b;
  background: #cadbe8;
  font-size: 1em;
`;

export const FormOption = styled.option`
  padding: 16px 16px;
  margin-bottom: 10px;
  border: 1px solid #2a4d5b;
  background: #cadbe8;
`;

export const FormButton = styled.button`
  background: #2a4d5b;
  padding: 16px 0
  border: none;
  border-radius: 4px;
  color: #cadbe8;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-bottom: 10px;
  color: red;
  font-size: 14px;
`;

export const SelectedButton = styled.button`
  background: #2a4d5b;
  padding: 16px 0
  border: none;
  border-radius: 4px;
  color: #cadbe8;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 3px;
  margin-left: 5px;
  margin-right: 250px;
`;
