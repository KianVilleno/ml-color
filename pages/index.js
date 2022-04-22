import { Box, Button } from "theme-ui";
import styled from "@emotion/styled";
import TextEditor from "../components/TextEditor";
import Output from "@/components/TextEditor/Output";
import GetButton from "@/components/TextEditor/GetButton";

export default function Home() {
  return (
    <Wrapper>
      <TextEditor />
      <Output />
      <GetButton />
    </Wrapper>
  );
}

const Wrapper = styled(Box)``;
