import React from "react";
import styled from "@emotion/styled";
import { Box } from "theme-ui";

const Footer = () => {
  return <Wrapper py={[2]}>Proudly made by 🇵🇭</Wrapper>;
};

export default Footer;

const Wrapper = styled(Box)`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  font-size: 0.6rem;
  text-transform: uppercase;

  @media screen and (max-height: 550px) {
    position: relative;
  }
`;
