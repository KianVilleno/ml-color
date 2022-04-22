import styled from "@emotion/styled";
import React from "react";
import { Container } from "theme-ui";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container px={[3]}>{children}</Container>
    </>
  );
};

export default Layout;
