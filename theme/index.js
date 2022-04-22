import { css } from "@emotion/react";
const breakpoints = ["600px"];
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const navHeight = "65px";
const layout = {
  container: {
    maxWidth: ["100%", "600px"],
  },
};

const text = {
  logo: "righteous-regular, sans-serif",
};

const colors = {
  text: "#111111",
  black: "#111111",
  white: "#FFFEFC",
  background: "#FFFEFC",
  primary: "#5170FF",
  secondary: "#0A4D52",
  tertiary: "#A6B5F8",
};
const buttons = {
  tool: {
    bg: "transparent",
    border: `2px solid ${colors.black}`,
    color: "text",
    padding: "0.2rem 0.8rem",
    borderRadius: "50px",
    mx: [2],
    mb: [3],
  },
  getButton: {
    bg: "transparent",
    border: `3px solid ${colors.black}`,
    color: "text",
    padding: "0.4rem 1rem",
    borderRadius: "50px",
    mx: [2],
    mb: [3],
  },
  copyButton: {
    bg: "transparent",
    border: `1px solid ${colors.white}`,
    color: "white",
    padding: "0.4rem 1rem",
    fontSize: "0.7rem",
    borderRadius: "50px",
    m: [3],
  },
};
const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
};
const mq = (a, b) => css`
  ${a}
  ${mediaQueries.small} {
    ${b}
  }
`;

const boxShadow = {
  card: css`
    box-shadow: 5px 5px 13px 2px rgba(0, 0, 0, 0.31);
  `,
};

const transitions = {
  1: "cubic-bezier(.17,.67,.83,.67)",
};

const theme = {
  layout,
  space,
  mq,
  css,
  navHeight,
  buttons,
  colors,
  boxShadow,
  text,
  transitions,
};

export default theme;
