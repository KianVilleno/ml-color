import styled from "@emotion/styled";
import React from "react";
import { Box, Container as ThemeContainer } from "theme-ui";

const Nav = () => {
  return (
    <Wrapper>
      <Container>MLColour.</Container>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled(Box)`
  width: 100%;
  height: ${({ theme }) => theme.navHeight};
`;

const Container = styled(ThemeContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: ${({ theme }) => theme.text.logo};
  font-size: 1.5rem;
`;
