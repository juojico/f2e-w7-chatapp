import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  color: ${props => props.theme[props.color]};
  ${props => props.type === "p1"?`
    padding: 10px;
    color: balck;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1.3px;
  `:null};
  ${props => props.type === "p2"?`
    padding: 10px;
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
    font-size: 13px;
    letter-spacing: -0.08px;
  `:null};
`;

const Text = ({
  children,
  align,
  size,
  color,
  themeColor,
  padding,
  top,
  bottom,
  left,
  right,
  ...props
}) => {
  return (
    <TextBox
      style={{
        color,
        padding,
        fontSize: size,
        textAlign: align,
        paddingTop: top,
        paddingBottom: bottom,
        paddingLeft: left,
        paddingRight: right
      }}
      color={themeColor}
      {...props}
    >
      {children}
    </TextBox>
  );
};

export default Text;
