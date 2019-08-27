import React from "react";
import styled from "styled-components";

const BtnBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 14px;
  margin: 10px 0;
  color: ${props => props.theme[props.color]};
  font-size: 18px;
  background-color: ${props => props.theme[props.bgColor]};
  border-radius: 50px;
`;

const BtnOutline = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 14px;
  margin: 10px 0;
  color: ${props => props.theme[props.color]};
  font-size: 18px;
  background-color: transparent;
  border: 1px solid ${props => props.theme[props.color]};
  border-radius: 50px;
`;

const Button = ({
  type,
  text,
  color = "white",
  bgColor = "black",
  ...props
}) => {
  return (
    <>
      {type === "outline" ? (
        <BtnOutline color={color} bgColor={bgColor} {...props}>
          {text}
        </BtnOutline>
      ) : (
        <BtnBox color={color} bgColor={bgColor} {...props}>
          {text}
        </BtnBox>
      )}
    </>
  );
};

export default Button;
