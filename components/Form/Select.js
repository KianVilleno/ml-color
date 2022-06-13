import React from "react";
import styled from "@emotion/styled";
import { Box } from "theme-ui";
import { useField, Field } from "formik";

const Select = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Wrapper mb={[3, 4]}>
      <StyledLabel as="label" mb={[2]}>
        {label}
      </StyledLabel>
      <StyledSelect as="select" {...field}>
        {options?.map((data, i) => (
          <option key={`${data}-${i}`} value={data}>
            {data}
          </option>
        ))}
      </StyledSelect>
    </Wrapper>
  );
};
export default Select;

const Wrapper = styled(Box)``;
const StyledSelect = styled(Field)`
  border: none;
  font-size: 1rem;
  border: 2px solid black;
  width: 50%;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  outline: none;
  color: inherit;
  -webkit-appearance: none;
`;
const StyledLabel = styled(Box)`
  display: block;
`;
