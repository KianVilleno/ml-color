import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import { Box, Button } from "theme-ui";
import { AppContext } from "context/AppContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Output = () => {
  const { code } = useContext(AppContext);
  const [copyString, setCopyString] = useState("Copy");
  const handleCopied = () => {
    setCopyString("Copied!");
    setTimeout(() => setCopyString("Copy"), 1500);
  };

  return (
    <Wrapper mt={[3]} p={[3]}>
      {code}
      <CopyToClipboard text={code} onCopy={handleCopied}>
        <CopyButton variant="copyButton">{copyString}</CopyButton>
      </CopyToClipboard>
    </Wrapper>
  );
};

export default Output;

const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  min-height: 8rem;
  position: relative;
`;

const CopyButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
`;
