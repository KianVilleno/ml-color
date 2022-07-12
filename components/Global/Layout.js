import React, { useContext } from "react";
import { Container } from "theme-ui";
import { AnimatePresence } from "framer-motion";
import PageAnimWrap from "@/components/PageAnimWrap";
import { useRouter } from "next/router";

import Nav from "./Nav";
import Footer from "./Footer";
import Advert from "../Advert";
import Tutorial from "../Tutorial";
import Confetti from "react-confetti";
import useWindowSize from "hooks/useWindowSize";
import { AppContext } from "context/AppContext";

const Layout = ({ children }) => {
  const { showConfetti, setShowConfetti } = useContext(AppContext);

  const router = useRouter();
  const { width, height } = useWindowSize();

  const handleDone = () => {
    setShowConfetti(false);
  };

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
          options={{ delay: 0.8 }}
          motionKey={router.asPath}
        >
          <Footer />
        </PageAnimWrap>
      </AnimatePresence>
      <Advert />
      <Tutorial />
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={800}
          run={showConfetti}
          onConfettiComplete={handleDone}
          recycle={false}
        />
      )}
    </>
  );
};

export default Layout;
