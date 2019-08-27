import React from "react";
import styled from "styled-components";
import Text from "../../componet/Text";
import Img from "../../componet/Img";
import owl from "../../asset/ui/owl.svg";
import Button from "../../componet/Button";
import HallBox from "../../componet/HallBox";

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

const Hall = () => {
  return (
    <MainArea>
      <Text type='p2' top='32px'>Welcome to</Text>
      <Img src={''} width='241px' height='33px' >Moment Hotel</Img>
      <Img src={owl} width='43px' height='56px' top='50px'/>
      <Text type='p1'>Choose your login</Text>
      <Button text='Anonymous' />
      <Button text='Use a nickname' type='outline' color="black" />
      <Text type='p1'>Top chat topics of the day</Text>
      <HallBox title="Plagiarism? Design?" content="Should the designer use the (paid/ free) stock photography?" />
    </MainArea>
  );
};

export default Hall;
