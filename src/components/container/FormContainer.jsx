import React from 'react';
import styled from "styled-components";

const FormWrapper = styled.div`
  height: 70vh;
  width: 40vh;
  border: 3px solid black;
  border-radius: 40px;
  display: block;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
  background-color: white;
`;

const FormContainer = (props) => (
    <FormWrapper>{props.children}</FormWrapper>
)

export default FormContainer;