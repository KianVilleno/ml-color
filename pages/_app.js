import "styles/fonts.css";
import React, { useEffect, useContext } from "react";
import { ThemeProvider } from "theme-ui";
import Layout from "../components/Global/Layout";
import theme from "../theme";
import { Global, css } from "@emotion/react";
import { AppContextProvider } from "context/AppContext";
import * as gtag from "utils/gtag";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );
    window.addEventListener("resize", () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    });
  }, []);
  useEffect(() => {
    console.log("📟 VIEW", "Home");
    gtag.pageview("Home");
  }, []);

  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle theme={theme} />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default MyApp;

const GlobalStyle = (props) => {
  return (
    <Global
      styles={css`
        html {
          font-family: sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          height: fill-available;
          height: -webkit-fill-available;
        }
        * {
          box-sizing: border-box;
          font-feature-settings: "ss01" on, "ss03" on;
        }
        body {
          min-height: 100vh;
          min-height: fill-available;
          min-height: -webkit-fill-available;
        }
        a {
          cursor: pointer;
          text-decoration: none;
        }
      `}
    />
  );
};
