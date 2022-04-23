import { Box, Button } from "theme-ui";
import styled from "@emotion/styled";
import TextEditor from "../components/TextEditor";
import Output from "@/components/TextEditor/Output";
import GetButton from "@/components/TextEditor/GetButton";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Wrapper>
        <TextEditor />
        <Output />
        <GetButton />
      </Wrapper>
      <Seo
        title="MLColour."
        image="/static/img/seo.png"
        description={
          "The mlcolour app is designed to be able to give life to normal ml texts. It offers an easy way to give color to your chats and customize them without having to go through the hassle of doing it yourself. Just type and choose from the personalization options and you will have the text you want."
        }
      />
    </>
  );
}

const Wrapper = styled(Box)``;
