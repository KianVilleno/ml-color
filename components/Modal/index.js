import styled from "@emotion/styled";
import React from "react";
import { Box } from "theme-ui";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ show, children }) => {
  const backdrop = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <motion.div
          variants={backdrop}
          exit="hidden"
          animate="visible"
          initial="hidden"
        >
          <Wrapper>
            <ContentWrapper p={[3]}>{children}</ContentWrapper>
            <Backdrop />
          </Wrapper>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

const Wrapper = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1030;
`;
const Backdrop = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.8;
  z-index: 1035;
`;
const ContentWrapper = styled(Box)`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 500px;
  max-height: 800px;
  width: 90vw;
  max-height: 80vh;
  z-index: 1040;
  text-align: center;
  overflow-y: auto;
`;
