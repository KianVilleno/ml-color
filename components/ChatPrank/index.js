import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Button } from "theme-ui";
import { Formik, Field, Form } from "formik";
import Input from "../Form/Input";
import Select from "../Form/Select";
import axios from "axios";
import Output from "../TextEditor/Output";
import * as Yup from "yup";

const ChatPrank = () => {
  const [MLBHeros, setMLBHeros] = useState([]);
  const [chatCode, setChatCode] = useState("");

  const getAllMLBHeroes = async () => {
    try {
      const result = await axios.get("/api/getMLBHeros");
      const _mlbheros = result?.data?.map(({ name }) => name);
      setMLBHeros(_mlbheros);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getAllMLBHeroes();
  }, []);

  return (
    <Wrapper mt={[4, 5]} px={[4, 4]} py={[4, 5]}>
      <Formik
        initialValues={{
          yourMessage: "",
          theirMessage: "",
          theirName: "",
          chat: "Team",
          hero: "Xavier",
        }}
        validationSchema={Yup.object().shape({
          yourMessage: Yup.string()
            .max(10)
            .required("Your Message is required."),
          theirMessage: Yup.string()
            .max(10)
            .required("Their Message is required."),
          theirName: Yup.string().max(10).required("Their Name is required."),
        })}
        onSubmit={async ({
          yourMessage,
          theirMessage,
          chat,
          hero,
          theirName,
        }) => {
          const ColorCode = chat === "Team" ? "6495ED" : "FF0000";

          const chatCodeGenerated = `${yourMessage} [${ColorCode}][${chat}]${theirName}(${hero}): [-]${theirMessage}`;
          setChatCode(chatCodeGenerated);
        }}
      >
        <Form>
          <Input name="yourMessage" placeholder="Your Message" />
          <Input name="theirName" placeholder="Their Name" />
          <Input name="theirMessage" placeholder="Their Message" />
          <Select label="Their Hero" name="hero" options={MLBHeros} />
          <Select label="Chat" name="chat" options={["Team", "All"]} />
          <Button mx={0} type="submit">
            Generate Code
          </Button>
        </Form>
      </Formik>
      <Output code={chatCode} />
    </Wrapper>
  );
};
export default ChatPrank;

const Wrapper = styled(Box)`
  border: 4px solid black;
  border-radius: 50px;
`;
