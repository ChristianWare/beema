import { Element } from "react-scroll";
import React from "react";
import styled from "styled-components/macro";
import { Marginer } from "../../components/marginer";
import { OurService } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import ServiceImg from "../../assets/Illustrations/web_development_.png";
import Service2Img from "../../assets/Illustrations/mobile_phone.png";
import Service3Img from "../../assets/Illustrations/bug_fixed.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name='serviceSection'>
      <SectionTitle>Best Quality Software</SectionTitle>
      <Marginer direction='verticle' margin='3em' />
      <OurService
        title='Fully intergrated services'
        description='Give thanks to the most high. Let me be clear, you have to make it through the jungle to make it to paradise, that’s the key, Lion! The key to success is to keep your head above the water, never give up.'
        imgUrl={ServiceImg}
      />
      <OurService
        title='Mobile Optimized'
        description='Let’s see what Chef Dee got that they don’t want us to eat. Major key, don’t fall for the trap, stay focused. '
        imgUrl={Service2Img}
        isReverse
      />
      <OurService
        title='Quality is our priority'
        description='It’s the ones closest to you that want to see you fail. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started.'
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}
