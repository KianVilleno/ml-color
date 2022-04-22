import React, { useContext, useRef, useState } from "react";
import { AppContext } from "context/AppContext";
import styled from "@emotion/styled";
import { Box } from "theme-ui";

import { HexColorPicker } from "react-colorful";

const ColorPicker = () => {
  const { editor, showColorPicker } = useContext(AppContext);
  const handleChange = (color) => {
    editor.chain().focus().setColor(color).run();
  };
  return (
    showColorPicker && (
      <Wrapper mt={[3]}>
        <PickerWrapper>
          <HexColorPicker
            color={editor?.getAttributes("textStyle").color || "#000000"}
            onChange={handleChange}
          />
        </PickerWrapper>
      </Wrapper>
    )
  );
};

export default ColorPicker;

const Wrapper = styled(Box)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PickerWrapper = styled(Box)``;
