import React from "react";
import styled from "styled-components";
import copperTube from "../../asset/ui/border-copper-tube.png";

const BoxWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 4px;
  margin-bottom: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  border: 20px solid transparent;
  border-image: url(${copperTube}) 40 40 round;
  border-image-outset: 3px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3), 0 12px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 100%;
    top: 0;
    background: radial-gradient(1px at 1px 6px, #b19046 100%, transparent 100%);
    background-size: 100% 10px;
  }
  &::before {
    left: -20px;
  }
  &::after {
    right: -20px;
    transform: scaleX(-1);
  }
`;

const Box = ({ children, ...props }) => {
  return (
    <BoxWrapper {...props}>
      {children}
    </BoxWrapper>
  );
};

export default Box;
