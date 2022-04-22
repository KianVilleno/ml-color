import styled from "@emotion/styled";
import React from "react";
import { Box } from "theme-ui";
import { css } from "@emotion/react";

const Color = ({ color, editor }) => {
  return (
    <Wrapper
      mr={[3]}
      color={color}
      onClick={() => editor.chain().focus().setColor(color).run()}
      isActive={editor?.getAttributes("textStyle").color === color}
    ></Wrapper>
  );
};

export default Color;

const Wrapper = styled(Box)`
  background-color: ${({ color }) => color};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  display: inline-block;

  &:last-of-type {
    margin-right: 0;
  }

  transition: all 200ms ${({ theme }) => theme.transitions[1]};
  ${({ isActive, theme }) =>
    isActive
      ? css`
          border: 2px solid ${theme.colors.black};
        `
      : ``};
`;
