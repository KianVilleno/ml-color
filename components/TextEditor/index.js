import React, { useContext, useState } from "react";
import { AppContext } from "context/AppContext";
import styled from "@emotion/styled";
import { Box, Button } from "theme-ui";
import { EditorContent as EditorContentComponent } from "@tiptap/react";

import FormatTool from "./FormatTool";
import ColorPicker from "./FormatTool/ColorTool/ColorPicker";

const TextEditor = () => {
  const { editor, showColorPicker } = useContext(AppContext);
  return (
    <Wrapper p={[3]} mt={[3]} showColorPicker={showColorPicker}>
      <EditorContent editor={editor} />
      <FormatTool />
      <ColorPicker />
    </Wrapper>
  );
};

export default TextEditor;

const Wrapper = styled(Box)`
  width: 100%;
  position: relative;
  ${({ theme }) => theme.boxShadow.card};
  border-radius: 20px;
  .ProseMirror {
    min-height: 20vh;
  }
  .ProseMirror:focus {
    outline: none;
  }
`;

const EditorContent = styled(EditorContentComponent)`
  top: 0;
  width: 100%;
  p {
    margin: 0;
  }
  outline: none;
`;
