import React from "react";
import styled from "@emotion/styled";
import { Box } from "theme-ui";
import ChatPrank from "@/components/ChatPrank";
import Seo from "@/components/Seo";

const ChatPrankPage = () => {
  return (
    <>
      <ChatPrank />
      <Seo title="Chat Prank" />
    </>
  );
};
export default ChatPrankPage;

const Wrapper = styled(Box)``;
