import React from "react";
import styled from "styled-components";
import { HALL_TEXT, MOCK_TOPIC } from "../../constant/hall";
import Img from "../../component/Img";
import Owl from "../../component/Owl";
import Text from "../../component/Text";
import Button from "../../component/Button";
import HallBox from "../../component/HallBox";
import MainArea from "../../component/MainArea";
import logo from "../../asset/icon/logo.svg";

const topics = MOCK_TOPIC;

const WelcomeArea = styled.div`
  padding: 0 40px;
`;

const HallBoxArea = styled.div`
  padding: 20px 40px;
`;

const Hall = () => {
  return (
    <MainArea>
      <WelcomeArea>
        <Text type='p2' align="center">{HALL_TEXT.welcome}</Text>
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
