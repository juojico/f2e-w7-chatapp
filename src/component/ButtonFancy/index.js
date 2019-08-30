import React from "react";
import propTypes from "prop-types";
import Button from "../Button";

const ButtonFancy = ({ on, text, ...props }) => {
  return (
    <>
      {on ? (
        <Button text={text} maxWidth='210px' fancy dot {...props} />
      ) : (
        <Button
          text={text}
          type='outline'
          color='black'
          maxWidth='210px'
          dot
          {...props}
        />
      )}
    </>
  );
};

ButtonFancy.propTypes = {
  on: propTypes.bool,
  text: propTypes.string
};

ButtonFancy.defaultProps = {
  on: false,
  text: ""
};

export default ButtonFancy;
