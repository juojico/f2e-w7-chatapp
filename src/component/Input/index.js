import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const InputBox = styled.div`
  display: flex;
  width: 100%;
  padding: 4px 8px;
  background: #ddb16f;
  border-radius: 20px;
  input {
    width: 100%;
    margin: 0 8px;
    font-size: 16px;
    border: none;
    background: none;
    &:focus {
      outline: none;
    }
  }
`;

const Input = ({
  label,
  value,
  placeholder,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <InputBox {...props}>
      {label}
      {leftIcon}
      <input type="text" placeholder={placeholder} value={value} />
      {rightIcon}
    </InputBox>
  );
};

Input.propTypes = {
  label: propTypes.string,
  value: propTypes.string,
  placeholder: propTypes.string
};

export default Input;
