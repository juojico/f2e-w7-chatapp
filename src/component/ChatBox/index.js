import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Text from "../Text";
import Img from "../Img";
import chatBg from "../../asset/ui/chat-bg.svg";

const ChatBoxWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10px;
  ${props => (props.yourself ? "flex-direction: row-reverse;" : null)}
`;

const MesArea = styled.div`
  box-sizing: border-box;
  flex: 1;
  padding: ${props =>
    props.yourself ? "10px 10px 10px 10%" : "10px 10% 10px 10px"};
  ${props => (props.yourself ? "text-align: right;" : null)}
`;

const MesBox = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  padding: 14px 22px;
  color: white;
  word-break: break-all;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 13px;
  &::before {
    position: absolute;
    content: '';
    width: 9px;
    height: 10px;
    top: 15px;
    ${props =>
      props.yourself
        ? `right: -9px;
    transform: scaleX(-1);`
        : "left: -9px;"}
    background: url(${chatBg});
    background-size: cover;
  }
`;

const ChatBox = ({ data, yourself, img }) => {
  return (
    <ChatBoxWrapper yourself={yourself}>
      <Img src={img} width='30px' height='30px' />
      <MesArea yourself={yourself}>
        <Text color='rgba(0, 0, 0, 0.5)' size='12px' bottom='4px'>
          {data.name}
        </Text>
        <MesBox yourself={yourself}>{data.mes}</MesBox>
      </MesArea>
    </ChatBoxWrapper>
  );
};

ChatBox.propTypes = {
  data: propTypes.object
};

export default ChatBox;
