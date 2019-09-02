import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HALL_TEXT, MOCK_TOPIC } from "../../constant/hall";
import Img from "../../component/Img";
import Owl from "../../component/Owl";
import Text from "../../component/Text";
import Input from "../../component/Input";
import ButtonFancy from "../../component/ButtonFancy";
import HallBox from "../../component/HallBox";
import MainMenu from "../../component/MainMenu";
import MainArea from "../../component/MainArea";
import logo from "../../asset/icon/logo.svg";

const topics = MOCK_TOPIC;

const WelcomeArea = styled.div`
  padding: 0 40px;
`;

const HallBoxArea = styled.div`
  padding: 20px 40px;
  a {
    text-decoration: none;
  }
`;

const InputBox = styled.div`
  height: ${props => (props.close ? "0" : "30px")};
  overflow: hidden;
  transition: 0.3s;
`;

const defaultLocal = {
  id: Date.now(),
  name: "anonymous",
  anonymous: true,
  avatar: 1
};

const local = localStorage.getItem("chatRoom")
  ? JSON.parse(localStorage.getItem("chatRoom"))
  : defaultLocal;

localStorage.setItem("chatRoom", JSON.stringify(local));

const Hall = route => {
  const [useAnonymous, setUseAnonymous] = useState(local.anonymous);
  const [nickName, setNickName] = useState(local.name);
  const nickname = useRef(null);

  const handleUseAnonymous = () => {
    setUseAnonymous(true);
    const data = { ...local, anonymous: true };
    localStorage.setItem("chatRoom", JSON.stringify(data));
  };

  const handleUseNickName = () => {
    console.log("TCL: handleUseNickName -> local", local);
    setUseAnonymous(false);
    nickname.current.focus();
    const data = { ...local, name: nickName, anonymous: false };
    localStorage.setItem("chatRoom", JSON.stringify(data));
    console.log("TCL: handleUseNickName -> data", data);
  };

  const handleInputChange = e => {
    const name = e.target.value;
    const avatar = Math.round(Math.random() * 3);
    setNickName(name);
    const data = { ...local, name, avatar, anonymous: false };
    localStorage.setItem("chatRoom", JSON.stringify(data));
    console.log("TCL: value", e.target.value, nickName);
  };

  return (
    <>
      <MainMenu path={route.match.path} />
      <MainArea>
        <WelcomeArea>
          <Text type='p2' align='center'>
            {HALL_TEXT.welcome}
          </Text>
          <Img src={logo} width='241px' height='33px' />
          <Owl />
          <Text type='p1'>{HALL_TEXT.chooseLogin}</Text>
          <ButtonFancy
            text={HALL_TEXT.btn1}
            on={useAnonymous}
            onClick={handleUseAnonymous}
          />
          <ButtonFancy
            text={HALL_TEXT.btn2}
            on={!useAnonymous}
            onClick={handleUseNickName}
          />
          <InputBox close={useAnonymous}>
            <Input
              placeholder='Enter Your Nickname'
              value={nickName}
              itemRef={nickname}
              maxWidth='210px'
              maxLength={20}
              line
              onChange={handleInputChange}
            />
          </InputBox>
        </WelcomeArea>
        <HallBoxArea>
          <Text type='p1'>{HALL_TEXT.dayTopic}</Text>
          {topics.map((item, index) => {
            return (
              <Link key={`topic${index}`} to={`/topic/chat/${item.id}`}>
                <HallBox
                  title={item.title}
                  content={item.content}
                  hot={item.hot}
                />
              </Link>
            );
          })}
        </HallBoxArea>
      </MainArea>
    </>
  );
};

export default Hall;
