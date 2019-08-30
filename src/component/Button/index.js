import React from "react";
import propTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import btnFancy from "../../asset/ui/btn-active-decoration.png";

const BtnBox = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  max-width: ${props => props.maxWidth};
  padding: 11px;
  margin: 10px auto 20px auto;
  text-align: ${props => props.align || "center"};
  color: ${props => props.theme[props.color]};
  font-size: 18px;
  background-color: ${props =>
    props.type === "outline" ? "transparent" : props.theme[props.bgColor]};
  border: ${props =>
    props.type === "outline"
      ? "1px solid " + props.theme[props.color]
      : "1px solid transparent"};
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.5s;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.1);
    opacity: 0;
    transition: 0.5s;
  }
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    &::after {
      opacity: 1;
    }
  }
`;

const gearRotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const BtnFancy = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 13px;
    height: 100%;
    background-image: url(${btnFancy});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    animation: ${gearRotate} 2s linear reverse infinite;
  }
  &::before {
    left: 14px;
  }
  &::after {
    right: 14px;
  }
`;

const BtnDots = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 2px;
    top: 50%;
    margin-top: -1px;
    background-color: ${props =>
      props.type === "outline" ? "black" : props.theme.primary};
    box-shadow: ${props =>
      props.type === "outline"
        ? "0 8px 0 black, 0 -8px 0 black"
        : "0 13px 0 " +
          props.theme.primary +
          ", 0 -13px 0 " +
          props.theme.primary};
  }
  &::before {
    left: 20px;
  }
  &::after {
    right: 20px;
  }
`;

const Button = ({
  type,
  text,
  align,
  color,
  bgColor,
  maxWidth,
  fancy,
  dot,
  ...props
}) => {
  return (
    <BtnBox
      type={type}
      align={align}
      color={color}
      bgColor={bgColor}
      maxWidth={maxWidth}
      {...props}
    >
      {fancy ? <BtnFancy /> : null}
      {dot ? <BtnDots type={type} color={color} /> : null}
      {text}
    </BtnBox>
  );
};

Button.propTypes = {
  type: propTypes.string,
  text: propTypes.string,
  align: propTypes.string,
  color: propTypes.string,
  bgColor: propTypes.string,
  maxWidth: propTypes.string
};

Button.defaultProps = {
  color: "white",
  bgColor: "black"
};

export default Button;
