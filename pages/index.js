import { Box, Button } from "theme-ui";
import styled from "@emotion/styled";
import TextEditor from "../components/TextEditor";
import Output from "@/components/TextEditor/Output";
import GetButton from "@/components/TextEditor/GetButton";
import VideoAd from "@/components/VideoAd";

export default function Home() {
  return (
    <Wrapper>
      <TextEditor />
      <Output />
      <GetButton />
      <VideoAd />
    </Wrapper>
  );
}

const Wrapper = styled(Box)``;
