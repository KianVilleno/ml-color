import React from "react";
import { Container } from "theme-ui";
import { AnimatePresence } from "framer-motion";
import PageAnimWrap from "@/components/PageAnimWrap";
import { useRouter } from "next/router";

import Nav from "./Nav";
import Footer from "./Footer";
import Advert from "../Advert";
import Tutorial from "../Tutorial";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <PageAnimWrap motionKey={router.asPath}>
          <Nav />
          <Container px={[3]}>{children}</Container>
        </PageAnimWrap>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <PageAnimWrap
          type="fade"
          options={{ delay: 1.3 }}
          motionKey={router.asPath}
        >
          <Footer />
        </PageAnimWrap>
      </AnimatePresence>
      <Advert />
      <Tutorial />
    </>
  );
};

export default Layout;
