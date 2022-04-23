import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { Box, Container as ThemeContainer, Text } from "theme-ui";

const Nav = () => {
  return (
    <Wrapper>
      <Container>
        <Text>MLColour.</Text>
        <Logo>
          <img alt="ml_logo" src={"/static/img/ml_logo_text.svg"} />
        </Logo>
      </Container>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled(Box)`
  width: 100%;
  height: ${({ theme }) => theme.navHeight};
`;
const Logo = styled(Box)`
  width: 55px;
  img {
    display: block;
    width: 100%;
  }
`;

const Container = styled(ThemeContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: ${({ theme }) => theme.text.logo};
  font-size: 1.5rem;
`;
