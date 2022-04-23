import React from "react";
import { motion } from "framer-motion";
import animationVariants from "/utils/animationVariants";

const PageAnimWrap = ({ type, options, motionKey, children }) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={animationVariants(type, options)}
      key={motionKey}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimWrap;
