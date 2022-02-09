import React, { useState } from "react";
import {
  EnterBtnWrapper,
  LandingBg,
  LandingContainer,
  LandingContent,
  LandingH1,
  ImageBg,
} from "./LandingElements";
import ImgBg from "../../assets/landing-bg.jpg";
import { Button } from "../../components/ButtonElement";

export const LandingPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <LandingContainer>
      <LandingBg>
        <ImageBg src={ImgBg} />
      </LandingBg>
      <LandingContent>
        <LandingH1>Welcome to</LandingH1>
        <LandingH1>Henry Countries</LandingH1>
        <EnterBtnWrapper>
          <Button
            to="/recipes"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
          >
            Enter >
          </Button>
        </EnterBtnWrapper>
      </LandingContent>
    </LandingContainer>
  );
};
