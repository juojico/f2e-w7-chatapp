import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const InputBox = styled.div`
  display: flex;
  flex: 1;
  padding: 4px 8px;
  margin: auto;
  background: #ddb16f;
  border-radius: 20px;
  input {
    width: 100%;
    margin: 0 8px;
    font-size: 16px;
    border: none;
    background: none;
    border-bottom: ${props =>
      props.line ? "2px solid rgba(0, 0, 0, 0.5)" : "none"};
    text-align: ${props => (props.line ? "center" : null)};
    &:focus {
      outline: none;
    }
  }
`;

const Input = ({
  label,
  value,
  maxWidth,
  maxLength,
  placeholder,
  leftIcon,
  rightIcon,
  line,
  itemRef,
  onChange,
  ...props
}) => {
  return (
    <InputBox line={line} style={{ maxWidth: maxWidth }}>
      {label}
      {leftIcon}
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        ref={itemRef}
        onChange={onChange}
        maxLength={maxLength}
        {...props}
      />
      {rightIcon}
    </InputBox>
  );
};

Input.propTypes = {
  label: propTypes.string,
  value: propTypes.string,
  maxWidth: propTypes.string,
  maxLength: propTypes.number,
  placeholder: propTypes.string,
  leftIcon: propTypes.element,
  rightIcon: propTypes.element,
  line: propTypes.bool
};

Input.defaultProps = {
  maxLength: 50
};

export default Input;
