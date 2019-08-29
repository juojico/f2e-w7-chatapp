import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Img from "../Img";
import Input from "../Input";
import back from "../../asset/icon/left-arrow.svg";
import tie from "../../asset/icon/bar-tie-l.svg";
import airship from "../../asset/icon/chat-airship.svg";
import emoji from "../../asset/icon/chat-emoji.svg";
import face from "../../asset/icon/chat-face.svg";
import voice from "../../asset/icon/chat-voice.svg";

const ChatAreaWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 120px;
  padding-bottom: 140px;
  background-color: ${props => props.theme.primary};
  overflow-y: auto;
  z-index: 100;
`;

const Header = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  top: 0;
  width: 100%;
  height: 100px;
  padding: 16px 24px;
  color: white;
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
`;

const HeadIcon = styled(Img)`
  position: absolute;
  left: 24px;
  bottom: 24px;
  cursor: pointer;
`;

const HeadImg = styled(Img)`
  margin: 0 14px 0 0;
`;

const InputArea = styled.div`
  position: fixed;
  width: 100%;
  height: 127px;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 8px 20px;
`;

const ChatArea = ({ children, title, type, ...props }) => {
  return (
    <ChatAreaWrapper {...props} className="myScroll">
      <Header>
        <Link to="/bar/">
          <HeadIcon src={back} width="16px" height="16px" />
        </Link>
        <HeadImg src={tie} width="32px" height="32px" />
        {title}
      </Header>
      {children}
      <InputArea>
        <InputBox>
          <Img src={airship} width="24px" height="24px" right="12px" />
          <Input rightIcon={<Img src={face} width="24px" height="24px" />} />
          <Img src={airship} width="24px" height="24px" left="12px" />
        </InputBox>
        <InputBox>
          <Img src={emoji} width="30px" height="30px" left="0" right="0" />
          <Img src={voice} width="30px" height="30px" left="0" right="0" />
        </InputBox>
      </InputArea>
    </ChatAreaWrapper>
  );
};

ChatArea.propTypes = {
  title: propTypes.string,
  type: propTypes.string
};

export default ChatArea;
