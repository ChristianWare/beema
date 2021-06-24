import React from "react";
import styled, { css } from "styled-components";

import BeemaLogo from "../../assets/logo/logo_croped.png";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: ${({ inline }) => inline && "center"};
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;

  ${({ inline }) =>
    inline &&
    css`
      width: 24px;
      height: 24px;
      margin-right: 6px;
    `};
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline }) => (inline ? "18px" : "40px")};
  color: ${({ inline }) => (inline ? "#fff" : theme.primary)};
  font-weight: 900;
`;

export function Logo(props) {
  const { inline } = props;

  return (
    <LogoContainer inline={inline}>
      <LogoImg src={BeemaLogo} inline={inline} />
      <LogoText inline={inline}>Beema</LogoText>
    </LogoContainer>
  );
}
