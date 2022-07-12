import styled from "@emotion/styled";
import { useField, Field } from "formik";
import React from "react";
import { Box } from "theme-ui";

const Input = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Wrapper mb={[3, 4]} as="label" htmlFor={field?.name}>
      <StyledInput {...field} {...props} />
      <FloatingText as="span">{props.placeholder}</FloatingText>
      {meta.touched && meta.error ? (
        <MessageError mt={2}>{meta.error}</MessageError>
      ) : null}
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled(Box)`
  display: block;
  position: relative;
  &:focus-within > span,
  input:not(:placeholder-shown) + span {
    transform: translateY(-10px) translateX(-20%) scale(0.6);
  }
`;
const MessageError = styled(Box)`
  font-size: 0.8rem;
  color: #e16259;
`;
const StyledInput = styled(Field)`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  outline: none;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1rem;
  &::placeholder {
    opacity: 0;
  }
  border-radius: 0;
`;
const FloatingText = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(5px);
  transition: 250ms all ease-in-out;
  pointer-events: none;
`;
