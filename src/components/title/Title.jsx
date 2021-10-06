import React from "react";
import styled from "styled-components";

const Titled = styled.p``;

const Title = ({ title, fontSize, fontWeight, fontColor, marginTop = 0 }) => (
  <p
    style={{
      fontSize: fontSize,
      fontWeight: fontWeight,
      color: fontColor,
      marginTop: marginTop,
    }}
  >
    {title}
  </p>
);

export default Title;
