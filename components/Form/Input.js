import styled from "@emotion/styled";
import { useField, Field } from "formik";
import React from "react";
import { Box } from "theme-ui";

const Input = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Wrapper mb={3}>
      <StyledInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <MessageError mt={2}>{meta.error}</MessageError>
      ) : null}
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled(Box)``;
const MessageError = styled(Box)`
  font-size: 0.8rem;
  color: #e16259;
`;
const StyledInput = styled(Field)`
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  outline: none;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1rem;
`;
