import React, { useContext } from "react";
import styled from "@emotion/styled";
import { AppContext } from "context/AppContext";
import { Box, Button } from "theme-ui";
import * as gtag from "utils/gtag";
const GetButton = () => {
  const {
    generateCode,
    setShowAdvert,
    showAdvert,
    advertCooldown,
    setAdvertCooldown,
  } = useContext(AppContext);

  const handleClick = () => {
    if (false) {
      setShowAdvert(true);
    } else {
      gtag.event("generate_code", "Default");
      generateCode();
      setAdvertCooldown((prev) => prev - 1);
    }
  };

  return (
    <Wrapper>
      <Button
        disabled={showAdvert}
        variant="outline"
        mt={[3]}
        onClick={handleClick}
      >
        Generate Code
      </Button>
    </Wrapper>
  );
};

export default GetButton;

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
`;
