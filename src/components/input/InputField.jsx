import React from "react";
import styled from "styled-components";
import "./input.scss";

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

const InputField = ({label, name, onChange, value}) => (
  <Div>
    <div class="form">
      <input
        type="text"
        id="email"
        class="form__input"
        autocomplete="off"
        placeholder=" "
        value={value}
        name={name}
        onChange={onChange}
      />
      <label for="email" class="form__label">
        {label}
      </label>
    </div>
  </Div>
);

export default InputField;
