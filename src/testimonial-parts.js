import React from "react";
import styled from "styled-components";
import { Split } from "@bedrock-layout/split";
import { Frame } from "@bedrock-layout/frame";

import jack from "../public/assets/jack.jpeg";

const LogoImg = styled.img`
  border-radius: 50%;
`;

const Wrapper = styled(Split)`
  align-items: center;
  > [data-bedrock-layout-frame] {
    min-width: 3rem;
  }
`;

export const Attribution = () => (
  <Wrapper fraction="auto-start" gutter="lg">
    <Frame ratio={[1, 1]}>
      <LogoImg src={jack} alt="" />
    </Frame>
    <span>Jack Maynard / Founder of B1nary.io </span>
  </Wrapper>
);
