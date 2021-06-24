import React from "react";
import styled from "styled-components";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topsection";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage(props) {
  return (
    <PageContainer>
      <TopSection />
      <ServicesSection />
    </PageContainer>
  );
}
