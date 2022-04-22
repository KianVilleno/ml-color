import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Box, Button } from "theme-ui";
import ColorTool from "./ColorTool";
import { AppContext } from "context/AppContext";
import { css } from "@emotion/react";

const FormatTool = () => {
  const { editor } = useContext(AppContext);
  return (
    <Wrapper>
      <ToolWrapper>
        <ToolButton
          variant="tool"
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor?.isActive("bold")}
        >
          <b>B</b>
        </ToolButton>
        <ToolButton
          variant="tool"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor?.isActive("italic")}
        >
          <i>I</i>
        </ToolButton>
        <ToolButton
          variant="tool"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor?.isActive("underline")}
        >
          <u>U</u>
        </ToolButton>
        <ToolButton
          variant="tool"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor?.isActive("strike")}
        >
          <s>S</s>
        </ToolButton>
      </ToolWrapper>
      <ColorTool />
    </Wrapper>
  );
};

export default FormatTool;

const Wrapper = styled(Box)``;
const ToolWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ToolButton = styled(Button)`
  transition: all 200ms ${({ theme }) => theme.transitions[1]};
  ${({ isActive, theme }) =>
    isActive
      ? css`
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
        `
      : ``};
`;
