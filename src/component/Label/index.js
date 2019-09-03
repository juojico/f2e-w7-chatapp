import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import all from "../../asset/icon/bar-tie.svg";
import joyful from "../../asset/icon/bar-joyful.svg";
import relaxed from "../../asset/icon/bar-relaxed.svg";
import intense from "../../asset/icon/bar-intense.svg";

const LabelBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 36px;
  margin-right: 5px;
  background: ${props => (props.active ? "black" : "rgba(255, 255, 255, .2)")};
  color: ${props => (props.active ? "white" : "black")};
  font-size: 10px;
  border-radius: 3px;
  transition: 0.5s;
  cursor: pointer;
  img {
    margin-right: 8px;
    ${props => (props.active ? "filter: invert(.5) brightness(2);" : null)}
    transition: 0.5s;
  }
`;

const ICONS = [all, joyful, relaxed, intense];

const Label = ({ text, icon, active, ...props }) => {
  return (
    <LabelBox active={active} {...props}>
      <img src={ICONS[icon]} alt={icon} />
      {text}
    </LabelBox>
  );
};

Label.propTypes = {
  text: propTypes.string,
  icon: propTypes.number
};

export default Label;
