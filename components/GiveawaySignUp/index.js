import styled from "@emotion/styled";
import { Formik, Field, Form } from "formik";
import React, { useState } from "react";
import { Box, Button, Text } from "theme-ui";
import Input from "../Form/Input";
import * as Yup from "yup";
import axios from "axios";
import { css } from "@emotion/react";
const GiveawaySignUp = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Wrapper>
      <TextWrapper mb={4} mt={2}>
        <Title>₱ 1,000 Gcash Giveaway </Title>
        <Caption mt={3} px={4}>
          One more step! Please fill out this form to confirm you want to enter
          the giveaway. Click done once you’ve completed it.
        </Caption>
      </TextWrapper>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
        }}
        onSubmit={async (values) => {
          try {
            await axios.post("/api/notion", values);
            setSubmitted(true);
          } catch (e) {
            console.error(e);
          }
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required("First Name is required."),
          lastname: Yup.string().max(255).required("Last Name is required."),
          email: Yup.string()
            .email("Email is invalid.")
            .required("Email is required."),
        })}
      >
        {({ isSubmitting }) =>
          submitted ? (
            <ThankyouMessage px={4} mb={3}>
              Thank you for patience! Your entry has been recorded and we will
              review it to make sure you’re qualified. Remember that if you
              don’t follow, you’re automatically disqualified so be sure to
              check if you’ve completed all the steps. Goodluck! 🍀
              <Box mt={4}>Now you can go back to the entry page.</Box>
            </ThankyouMessage>
          ) : (
            <StyledForm isSubmitting={isSubmitting}>
              <Input id="firstname" name="firstname" placeholder="First Name" />
              <Input id="lastname" name="lastname" placeholder="Last Name" />
              <Input id="email" name="email" placeholder="Email" type="email" />
              <Button mt={3} type="submit">
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </StyledForm>
          )
        }
      </Formik>
    </Wrapper>
  );
};

export default GiveawaySignUp;

const Wrapper = styled(Box)``;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  ${({ isSubmitting }) =>
    isSubmitting
      ? css`
          opacity: 0.5;
          pointer-events: none;
        `
      : ``};
`;

const Title = styled(Text)`
  font-size: 1.5rem;
`;
const TextWrapper = styled(Box)`
  text-align: center;
`;

const Caption = styled(Text)`
  font-size: 0.9rem;
  display: block;
  color: #444;
`;
const ThankyouMessage = styled(Box)`
  text-align: center;
  font-size: 1rem;
  line-height: 140%;
`;
