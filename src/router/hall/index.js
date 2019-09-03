import React, { useState, useRef, useContext } from "react";
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
import Store from "../../store";

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
  const value = useContext(Store);
  const txt = value.text.hall;
  const [useAnonymous, setUseAnonymous] = useState(local.anonymous);
  const [nickName, setNickName] = useState(local.name);
  const nickname = useRef(null);

  const setLocal = data => {
    localStorage.setItem("chatRoom", JSON.stringify(data));
  };

  const handleUseAnonymous = () => {
    setUseAnonymous(true);
    const data = { ...local, anonymous: true };
    setLocal(data);
  };

  const handleUseNickName = () => {
    setUseAnonymous(false);
    nickname.current.focus();
    const data = { ...local, name: nickName, anonymous: false };
    setLocal(data);
  };

  const handleInputChange = e => {
    const name = e.target.value;
    const avatar = Math.round(Math.random() * 3);
    setNickName(name);
    const data = { ...local, name, avatar, anonymous: false };
    setLocal(data);
  };

  return (
    <>
      <MainMenu path={route.match.path} />
      <MainArea>
        <WelcomeArea>
          <Text type='p2' align='center'>
            {txt.welcome}
          </Text>
          <Img src={logo} width='241px' height='33px' />
          <Owl />
          <Text type='p1'>{txt.chooseLogin}</Text>
          <ButtonFancy
            text={txt.btn1}
            on={useAnonymous}
            onClick={handleUseAnonymous}
          />
          <ButtonFancy
            text={txt.btn2}
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
          <Text type='p1'>{txt.dayTopic}</Text>
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
