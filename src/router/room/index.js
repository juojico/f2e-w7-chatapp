import React from "react";
import styled from "styled-components";
import { ROOM_TEXT, MOCK_ROOMS } from "../../constant/room";
import MainArea from "../../component/MainArea";
import Search from "../../component/Search";
import RoomList from "../../component/RoomList";

const rooms = MOCK_ROOMS;

const SearchBox = styled(Search)`
  position: absolute;
  top: 78px;
  right: 26px;
`;

const BoxArea = styled.div`
  padding: 20px 26px;
`;

const Room = () => {
  return (
    <MainArea title={ROOM_TEXT.title} subtitled={ROOM_TEXT.subtitled}>
      <SearchBox />
      <BoxArea>
        {rooms.map(item => (
          <RoomList key={`RoomList${item.id}`} data={item} />
        ))}
      </BoxArea>
    </MainArea>
  );
};

export default Room;
