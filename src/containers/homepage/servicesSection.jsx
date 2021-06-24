import { Element } from "react-scroll";
import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1400px;
  display: flex;
  flex-direction: column;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name='serviceSection'>
      <SectionTitle>Best Quality Software</SectionTitle>
    </ServicesContainer>
  );
}
