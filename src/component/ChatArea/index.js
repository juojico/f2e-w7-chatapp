import React, { useState } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Img from "../Img";
import Input from "../Input";
import ChatBox from "../ChatBox";
import back from "../../asset/icon/left-arrow.svg";
import play from "../../asset/icon/chat-play.svg";
import face from "../../asset/icon/chat-face.svg";
import voice from "../../asset/icon/chat-voice.svg";
import emoji from "../../asset/icon/chat-emoji.svg";
import airship from "../../asset/icon/chat-airship.svg";
import wine from "../../asset/avatar/wine.svg";
import martini from "../../asset/avatar/martini.svg";
import martini2 from "../../asset/avatar/martini2.svg";
import martini3 from "../../asset/avatar/martini3.svg";
import pp from "../../asset/avatar/pp.jpg";

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
  padding: 16px 16px 16px 40px;
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
  margin: 0;
`;

const HeadTitle = styled.div`
  ${props => (props.type === "bar" ? null : "flex: 1;")}
  padding-left: 14px;
  h2 {
    padding: 2px;
    margin: 0;
    color: white;
    font-style: italic;
    font-weight: bold;
  }
  span {
    color: ${props => props.theme.primary};
  }
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

const ChatArea = ({
  type,
  title,
  subtitled,
  img,
  chats,
  onClickBack,
  onSend,
  ...props
}) => {
  const [mes, setMes] = useState("");

  const local = JSON.parse(localStorage.getItem("chatRoom"));
  const nameId = local.id;
  const name = local.anonymous ? "anonymous" : local.name;
  const avatar = local.avatar;
  const chatsArr = chats ? Object.keys(chats).map(item => chats[item]) : [];

  const handleInputChange = e => {
    setMes(e.target.value);
  };

  const handleSend = () => {
    if (mes.trim()) {
      setMes("");
      const id = Date.now();
      const payload = {
        id,
        nameId,
        name,
        avatar,
        mes
      };
      onSend(payload);
    }
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      handleSend();
    }
  };

  const IMG = [wine, martini, martini2, martini3, pp];

  return (
    <ChatAreaWrapper {...props} className='myScroll'>
      <Header>
        <HeadIcon src={back} width='16px' height='16px' onClick={onClickBack} />
        {type === "bar" ? (
          <HeadImg src={IMG[img]} width='32px' height='32px' />
        ) : null}
        <HeadTitle type={type}>
          <h2>{title}</h2>
          <span>{subtitled}</span>
        </HeadTitle>
      </Header>
      {chatsArr.map(item => {
        return (
          <ChatBox
            key={`chatBox${item.id}`}
            data={item}
            img={IMG[item.avatar]}
            yourself={item.nameId === nameId}
          />
        );
      })}
      <InputArea>
        <InputBox>
          {type === "bar" ? (
            <Img src={play} width='24px' height='24px' right='12px' />
          ) : null}
          <Input
            rightIcon={<Img src={face} width='24px' height='24px' />}
            value={mes}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          }
          <Img
            src={airship}
            width='24px'
            height='24px'
            left='12px'
            onClick={handleSend}
          />
        </InputBox>
        <InputBox>
          <Img src={emoji} width='30px' height='30px' left='0' right='0' />
          <Img src={voice} width='30px' height='30px' left='0' right='0' />
        </InputBox>
      </InputArea>
    </ChatAreaWrapper>
  );
};

ChatArea.propTypes = {
  type: propTypes.string,
  title: propTypes.string,
  subtitled: propTypes.string,
  img: propTypes.number
};

export default ChatArea;
