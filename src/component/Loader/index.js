import React from "react";
import propTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const LoaderArea = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding-bottom: 100px;
  z-index: 100;
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderBox = styled.div`
  position: relative;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  border-radius: 100%;
`;

const LoaderImg = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 2px solid ${props => props.color};
  opacity: 0.3;
  &::after {
    position: absolute;
    content: "Loading...";
    width: 100%;
    font-size: 12px;
    text-align: center;
    top: 120%;
  }
`;

const LoaderBar = styled(LoaderImg)`
  border: none;
  opacity: 0.6;

  &::before,
  &::after {
    box-sizing: border-box;
    position: absolute;
    content: "";
    width: 16%;
    height: 100%;
    top: 0;
    left: 50%;
    margin-left: -8%;
    border-radius: 10%;
    border: 2px solid ${props => props.color};
    animation: ${rotate} 1.5s infinite;
  }

  &::after {
    animation: ${rotate} 1.5s reverse infinite;
  }
`;

const Loader = ({ color, size }) => {
  return (
    <LoaderArea>
      <LoaderBox size={size}>
        <LoaderImg color={color} />
        <LoaderBar color={color} />
      </LoaderBox>
    </LoaderArea>
  );
};

Loader.propTypes = {
  color: propTypes.string,
  size: propTypes.number
};

Loader.defaultProps = {
  color: "black",
  size: 3
};

export default Loader;
