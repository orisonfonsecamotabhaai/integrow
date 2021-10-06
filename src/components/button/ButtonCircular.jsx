import React from "react";
import PropTypes from 'prop-types';

const ButtonCircular = ({ title, borderRadius, backgroundColor, color, height, width, marginTop = 0, fontSize, onClick}) =>(
  <>
    <button
      style={{
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        color: color,
        height: height,
        width: width,
        marginTop: marginTop,
        border: 'none',
        fontSize: fontSize
      }}
      onClick={onClick}
    >
      {title}
    </button>
  </>
);

ButtonCircular.propTypes = {
    onClick: PropTypes.func,
  };
  
  ButtonCircular.defaultProps = {
    onClick: null,
  };
  

export default ButtonCircular;