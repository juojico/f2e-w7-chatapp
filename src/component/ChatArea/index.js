import React from "react";
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
  ${props => props.type === 'bar'?null:"flex: 1;"}
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
  ...props
}) => {
  return (
    <ChatAreaWrapper {...props} className='myScroll'>
      <Header>
        <HeadIcon src={back} width='16px' height='16px' onClick={onClickBack} />
        {type === "bar" ? (
          <HeadImg src={img} width='32px' height='32px' />
        ) : null}
        <HeadTitle type={type}>
          <h2>{title}</h2>
          <span>{subtitled}</span>
        </HeadTitle>
      </Header>
      {chats.map(item => {
        return <ChatBox key={`chatBox${item.id}`} data={item} />;
      })}
      <InputArea>
        <InputBox>
          {type === "bar" ? (
            <Img src={play} width='24px' height='24px' right='12px' />
          ) : null}
          <Input rightIcon={<Img src={face} width='24px' height='24px' />} />
          <Img src={airship} width='24px' height='24px' left='12px' />
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
  img: propTypes.string,
  chats: propTypes.array
};

export default ChatArea;
