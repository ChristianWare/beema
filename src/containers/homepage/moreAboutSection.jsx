import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

import AboutImgUrl from "../../assets/Illustrations/rocket_launch_.png";

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 23px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
`;

const AboutImg = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;

  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;

// const Line = styled.span`
//   min-width: 100%;
//   min-height: 1px;
//   margin-bottom: 1em;
//   background-color: #cdcdcd;
//   display: flex;
// `;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
      <SectionTitle>More About Beema</SectionTitle>
      <AboutContainer>
        <AboutText>
          Major key, don’t fall for the trap, stay focused. It’s the ones
          closest to you that want to see you fail. Watch your back, but more
          importantly when you get out the shower, dry your back, it’s a cold
          world out there. {<br />}
          {<br />} The key to success is to keep your head above the water,
          never give up. You should never complain, complaining is a weak
          emotion, you got life, we breathing, we blessed. {<br />}
          {<br />}The key to more success is to have a lot of pillows. Lion! Put
          it this way, it took me twenty five years to get these plants, twenty
          five years of blood sweat and tears.
        </AboutText>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
    </MoreAboutContainer>
  );
}
