import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Button } from "theme-ui";
import { Formik, Field, Form } from "formik";
import Input from "../Form/Input";
import Select from "../Form/Select";
import axios from "axios";
import Output from "../TextEditor/Output";
import * as Yup from "yup";
import MLHerosBackup from "data/mlheroes.backup.json";

import { AnimatePresence } from "framer-motion";
import PageAnimWrap from "../PageAnimWrap";

const ChatPrank = () => {
  const [MLBHeros, setMLBHeros] = useState([]);
  const [chatCode, setChatCode] = useState("");

  const getAllMLBHeroes = async () => {
    try {
      const result = await axios.get("/api/getMLBHeros");
      const _mlbheros = result?.data?.map(({ name }) => name).sort();
      setMLBHeros(_mlbheros);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getAllMLBHeroes();
    setMLBHeros(MLHerosBackup.data?.map(({ name }) => name).sort());
  }, []);

  return (
    <>
      <Wrapper my={[3, 4]} p={[4]}>
        <Formik
          initialValues={{
            yourMessage: "",
            theirMessage: "",
            theirName: "",
            chat: "Team",
            hero: "Miya",
          }}
          validationSchema={Yup.object().shape({
            yourMessage: Yup.string()
              .max(15, "15 characters only.")
              .required("Your Message is required."),
            theirMessage: Yup.string()
              .max(15, "15 characters only.")
              .required("Their Message is required."),
            theirName: Yup.string()
              .max(15, "15 characters only.")
              .required("Their Name is required."),
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
            <RadioWrapper>
              <Box mr={[1, 2]}>
                <Select label="Their Hero" name="hero" options={MLBHeros} />
              </Box>
              <Box ml={[1, 2]}>
                <Select label="Chat" name="chat" options={["Team", "All"]} />
              </Box>
            </RadioWrapper>

            <Button mx={0} mb={2} type="submit">
              Generate Code
            </Button>
          </Form>
        </Formik>
        {chatCode !== "" && (
          <AnimatePresence exitBeforeEnter>
            <PageAnimWrap
              type="fade"
              options={{ delay: 0.2 }}
              motionKey={chatCode !== ""}
            >
              <Output code={chatCode} />
            </PageAnimWrap>
          </AnimatePresence>
        )}
      </Wrapper>
      <div id="container-145ea40c2467c98edb9d771cbd1d2b3c"></div>
    </>
  );
};
export default ChatPrank;

const Wrapper = styled(Box)`
  /* border: 1px solid black; */
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 5px 5px 10px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 10px 6px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
`;

const RadioWrapper = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
`;
