import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo";
import { Button } from "../../components/Button";
import { Marginer } from "../../components/marginer";
import { DownArrow } from "../../components/downArrow";
import { Element, scroller } from "react-scroll";
import { Link } from "react-scroll";

import BackgroundImg from "../../assets/pictures/company_team.jpg";
import { Navbar } from "../../components/navbar";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.89);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
  margin: 0;
`;

const DownArrowContainer = styled(Link)`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {
  // const scrollToNextSection = () => {
  //   scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  // };

  return (
    <Element name='topSection'>
      <TopContainer>
        <BackgroundFilter>
          <Navbar />
          <Marginer direction='verticle' margin='8em' />
          <Logo />
          <Marginer direction='verticle' margin='4em' />
          <MotivationalText>Software Development</MotivationalText>
          <MotivationalText>From the Best in the Industry</MotivationalText>
          <Marginer direction='verticle' margin='2em' />
          <Button>Start Your Project</Button>
          <DownArrowContainer to='serviceSection' smooth={true} duration={1000}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
}
