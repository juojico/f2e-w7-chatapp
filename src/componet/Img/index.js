import React from "react";
import styled from "styled-components";

const ImgBox = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;

const Img = ({
  children,
  src,
  align,
  color,
  width,
  height,
  padding,
  margin,
  top,
  bottom,
  left,
  right,
  ...props
}) => {
  return (
    <ImgBox
      style={{
        backgroundImage: `url(${src})`,
        color,
        width,
        height,
        padding,
        margin,
        alignItems: align,
        marginTop: top,
        marginBottom: bottom,
        marginLeft: left,
        marginRight: right
      }}
      {...props}
    >
      {children}
    </ImgBox>
  );
};

export default Img;
