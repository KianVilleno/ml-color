import GiveawaySignUp from "@/components/GiveawaySignUp";
import Seo from "@/components/Seo";
import styled from "@emotion/styled";
import React from "react";
import { Box } from "theme-ui";

const GiveawayConfirmation = () => {
  return (
    <>
      <Wrapper p={3} mt={4}>
        <GiveawaySignUp />
      </Wrapper>
      <Seo title={"Giveaway Confirmation"} />
    </>
  );
};

export default GiveawayConfirmation;

const Wrapper = styled(Box)`
  border: 3px solid ${({ theme }) => theme.colors.black};
  border-radius: 20px;
`;
