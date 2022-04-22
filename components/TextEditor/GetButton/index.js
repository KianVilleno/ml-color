import React, { useContext } from "react";
import styled from "@emotion/styled";
import { AppContext } from "context/AppContext";
import { Box, Button } from "theme-ui";
import MLParser from "utils/MLParser";

const GetButton = () => {
  const { setCode, editor } = useContext(AppContext);

  const handleClick = () => {
    const html = editor.getHTML();
    setCode(MLParser(html));
  };

  return (
    <Wrapper>
      <Button variant="getButton" mt={[3]} onClick={handleClick}>
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
