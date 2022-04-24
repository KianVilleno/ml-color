import GiveawaySignUp from "@/components/GiveawaySignUp";
import styled from "@emotion/styled";
import React from "react";
import { Box } from "theme-ui";

const GiveawayConfirmation = () => {
  return (
    <Wrapper p={3} mt={4}>
      <GiveawaySignUp />
    </Wrapper>
  );
};

export default GiveawayConfirmation;

const Wrapper = styled(Box)`
  border: 3px solid ${({ theme }) => theme.colors.black};
  border-radius: 20px;
`;
