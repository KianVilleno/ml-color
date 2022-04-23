import React, { useContext } from "react";
import styled from "@emotion/styled";
import { AppContext } from "context/AppContext";
import { Box, Button } from "theme-ui";

const GetButton = () => {
  const {
    generateCode,
    setShowAdvert,
    showAdvert,
    advertCooldown,
    setAdvertCooldown,
  } = useContext(AppContext);

  const handleClick = () => {
    if (advertCooldown === 0) {
      setShowAdvert(true);
    } else {
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
