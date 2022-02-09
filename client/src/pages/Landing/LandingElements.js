import styled from "styled-components";

export const LandingContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const LandingBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: blur(0.8px);
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: white;
`;

export const LandingContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LandingH1 = styled.h1`
  color: #2a4d5b;
  font-size: 55px;
  text-align: center;
  text-shadow: -3px -3px 5px white, 3px 3px 5px white, 0 0 5px #b1cfe2,
    0 0 5px #b1cfe2;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const LandingP = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const EnterBtnWrapper = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
