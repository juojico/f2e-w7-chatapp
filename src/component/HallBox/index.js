import React, { useContext } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Text from "../Text";
import fire from "../../asset/icon/fire.svg";
import Store from "../../store";

const HallBoxWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  margin: 10px auto 20px auto;
  padding: 25px;
  color: white;
  background-color: black;
  text-align: left;
  cursor: pointer;
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 14px;
    height: 94%;
    top: 3%;
    background: radial-gradient(1px at 2px 6px, #9b1000 100%, transparent 100%),
      radial-gradient(1px at 12px 6px, #b19046 100%, transparent 100%);
    background-size: 100% 10px;
  }
  &::before {
    left: -7px;
  }
  &::after {
    right: -7px;
    transform: scaleX(-1);
  }
`;

const Comment = styled.div`
  padding-top: 14px;
  font-size: 10px;
`;

const HallBox = ({ title, content, hot, ...props }) => {
  const value = useContext(Store);
  const txt = value.text.hall;
  return (
    <HallBoxWrapper {...props}>
      <Text color='white' size='18px' top='13px' bottom='8px'>
        {title}
      </Text>
      <Text themeColor='primary' size='14px' top='10px' bottom='10px'>
        {content}
      </Text>
      <Comment>
        <Text>
          {txt.comment} {hot} <img src={fire} alt='hot' />
        </Text>
      </Comment>
    </HallBoxWrapper>
  );
};

HallBox.propTypes = {
  title: propTypes.string,
  content: propTypes.string,
  hot: propTypes.number
};

HallBox.defaultProps = {
  title: "無標題",
  content: "無內容",
  hot: 0
};

export default HallBox;
