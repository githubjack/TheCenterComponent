import React from "react";
import ReactDOM from "react-dom";
import { PadBox } from "@bedrock-layout/padbox";
import Center from "@bedrock-layout/center";
import "@bedrock-layout/css-reset/lib/reset.css";
import styled from "styled-components";
import Testimonial from "./Testimonial";

const AppStyles = styled(PadBox).attrs(() => ({
  as: Center,
  padding: "md",
  maxWidth: "85rem"
}))`
  font-family: sans-serif;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppStyles>
      <Testimonial />
    </AppStyles>
  </React.StrictMode>,
  rootElement
);
