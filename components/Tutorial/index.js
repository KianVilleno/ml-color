import styled from "@emotion/styled";
import { AppContext } from "context/AppContext";
import React, { useContext, useEffect } from "react";
import { AspectRatio, Box, Button, Text } from "theme-ui";
import Modal from "../Modal";

const Tutorial = () => {
  const { showTutorial, setShowTutorial, setShowConfetti } =
    useContext(AppContext);

  useEffect(() => {
    const isTutorialDone = localStorage.getItem("mlcolour-tutorial-done");
    if (!isTutorialDone) {
      localStorage.setItem("mlcolour-tutorial-done", true);
    }
    setShowTutorial(isTutorialDone !== "true");
  }, []);

  const handleStart = () => {
    setShowConfetti(true);
    setShowTutorial(false);
  };

  return (
    <Modal show={showTutorial}>
      <Title my={3}>Welcome to MLColour!</Title>
      <Caption my={2}>
        To get started, watch this short tutorial video in order to understand
        how to use the app.
      </Caption>
      <VideoWrapper mt={3} ratio={1 / 1}>
        <YoutubeVideo
          as="iframe"
          src="https://www.youtube.com/embed/_Vxz64lc8uM"
        ></YoutubeVideo>
      </VideoWrapper>
      <Button variant="outline" mt={4} onClick={handleStart}>
        Get Started!
      </Button>
    </Modal>
  );
};

export default Tutorial;

const Title = styled(Text)`
  font-size: 1.8em;
  display: block;
  font-family: ${({ theme }) => theme.text.logo};
`;
const Caption = styled(Text)`
  font-size: 1rem;
  display: block;
`;

const VideoWrapper = styled(AspectRatio)``;
const YoutubeVideo = styled(Box)`
  width: 100%;
  height: 100%;
  border: none;
`;
