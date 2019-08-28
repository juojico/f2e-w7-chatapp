import React from "react";
import styled from "styled-components";
import { ROOM_TEXT, MOCK_ROOMS } from "../../constant/room";
import MainArea from "../../component/MainArea";

const rooms = MOCK_ROOMS;

const BoxArea = styled.div`
  padding: 20px 40px;
`;

const Room = () => {
  return (
    <MainArea title={ROOM_TEXT.title} subtitled={ROOM_TEXT.subtitled}>
      <BoxArea>{rooms.map(item=>item.name)}</BoxArea>
    </MainArea>
  );
};

export default Room;