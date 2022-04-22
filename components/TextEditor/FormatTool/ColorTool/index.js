import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Box } from "theme-ui";
import Color from "./Color";
import { AppContext } from "context/AppContext";
import randomColor from "randomcolor";
import { IoIosColorPalette } from "react-icons/io";
const colors = [
  "#FF0000",
  "#00FF00",
  "#0000CC",
  "#FFFF00",
  "#FFA500",
  "#800000",
  "#FF00FF",
  "#00FFFF",
  ...randomColor({
    count: 50,
    luminosity: "light",
  }),
];

const ColorTool = () => {
  const { editor, setShowColorPicker } = useContext(AppContext);
  return (
    <Wrapper>
      <ColorsWrapper>
        {colors?.map((color, i) => (
          <Color color={color} key={`color-${i}`} editor={editor} />
        ))}
      </ColorsWrapper>
      <Box pl={[2]}>
        <IoIosColorPalette
          color={editor?.getAttributes("textStyle").color || "#000000"}
          size={"2rem"}
          onClick={() => {
            setShowColorPicker((p) => !p);
          }}
        />
      </Box>
    </Wrapper>
  );
};

{
}

export default ColorTool;

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ColorsWrapper = styled(Box)`
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  height: 1.5rem;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  border-radius: 50px;
  flex: 1;
`;
