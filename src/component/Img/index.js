import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const ImgBox = styled.div`
  position: ${props => (props.z ? "absolute" : null)};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
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
  z,
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
        z,
        alignItems: align,
        marginTop: top,
        marginBottom: bottom,
        marginLeft: left,
        marginRight: right
      }}
      z={z}
      {...props}
    >
      {children}
    </ImgBox>
  );
};

Img.propTypes = {
  src: propTypes.string,
  align: propTypes.string,
  color: propTypes.string,
  width: propTypes.string,
  height: propTypes.string,
  padding: propTypes.string,
  margin: propTypes.string,
  top: propTypes.string,
  bottom: propTypes.string,
  left: propTypes.string,
  right: propTypes.string,
  z: propTypes.number
};

Img.defaultProps = {
  width: "100%",
  height: "100%"
};

export default Img;
