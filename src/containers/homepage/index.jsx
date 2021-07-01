import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { ReviewsSection } from "../reviewsSection";
import { MoreAboutSection } from "./moreAboutSection";
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
      <Marginer direction='verticle' margin='2em' />
      <ReviewsSection />
      <MoreAboutSection />
      <Marginer direction='verticle' margin='8em' />
      <Footer />
    </PageContainer>
  );
}
