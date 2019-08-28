import React from "react";
import styled from "styled-components";
import { HALL_TEXT, MOCK_TOPIC } from "../../constant/hall";
import Text from "../../componet/Text";
import Img from "../../componet/Img";
import Owl from "../../componet/Owl";
import Button from "../../componet/Button";
import HallBox from "../../componet/HallBox";
import logo from "../../asset/icon/logo.svg";

const topics = MOCK_TOPIC;

const MainArea = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 85px;
  background-color: ${props => props.theme.primary};
  text-align: center;
  overflow-y: auto;
`;

const WelcomeArea = styled.div`
  padding: 32px 40px 0 40px;
`;

const HallBoxArea = styled.div`
  padding: 20px 40px;
`;

const Hall = () => {
  return (
    <MainArea>
      <WelcomeArea>
        <Text type='p2'>{HALL_TEXT.welcome}</Text>
        <Img src={logo} width='241px' height='33px' />
        <Owl />
        <Text type='p1'>{HALL_TEXT.chooseLogin}</Text>
        <Button text={HALL_TEXT.btn1} maxWidth='210px' fancy dot />
        <Button
          text={HALL_TEXT.btn2}
          type='outline'
          color='black'
          maxWidth='210px'
          dot
        />
      </WelcomeArea>
      <HallBoxArea>
        <Text type='p1'>{HALL_TEXT.dayTopic}</Text>
        {topics.map((item, index) => {
          return (
            <HallBox
              key={`topic${index}`}
              title={item.title}
              content={item.content}
              hot={item.hot}
            />
          );
        })}
      </HallBoxArea>
    </MainArea>
  );
};

export default Hall;
