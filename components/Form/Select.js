import React from "react";
import styled from "@emotion/styled";
import { Box } from "theme-ui";
import { useField, Field } from "formik";

const Select = ({ label, options, mr, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <Wrapper mb={[3, 4]} mr={mr}>
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

const Wrapper = styled(Box)`
  width: 100%;
`;
const StyledSelect = styled(Field)`
  width: 100%;
  border: none;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  outline: none;
  color: inherit;
  -webkit-appearance: none;
  background-color: ${({ theme }) => theme.colors.white}; ;
`;
const StyledLabel = styled(Box)`
  display: block;
`;
