import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Text from "../Text";
import Img from "../Img";

const ChatBoxWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  box-sizing: border-box;
  display: inline-block;
  padding: 14px 22px;
  color: white;
  word-break: break-all;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 13px;
`;

const ChatBox = ({ data }) => {
  return (
    <ChatBoxWrapper yourself={data.yourself}>
      <Img src={data.avatar} width="30px" height="30px" left="10px" />
      <MesArea yourself={data.yourself}>
        <Text color="rgba(0, 0, 0, 0.5)" size="12px" bottom="4px">
          {data.name}
        </Text>
        <MesBox>{data.mes}</MesBox>
      </MesArea>
    </ChatBoxWrapper>
  );
};

ChatBox.propTypes = {
  data: propTypes.object
};

export default ChatBox;
