import React from "react";
import styled from "styled-components";
import { ROOM_TEXT, MOCK_ROOMS } from "../../constant/room";
import Search from "../../component/Search";
import MainMenu from "../../component/MainMenu";
import MainArea from "../../component/MainArea";
import RoomList from "../../component/RoomList";

const rooms = MOCK_ROOMS;

const SearchBox = styled(Search)`
  position: absolute;
  top: 78px;
  right: 26px;
`;

const BoxArea = styled.div`
  padding: 20px 26px;
  a {
    text-decoration: none;
  }
`;

const Room = route => {
  return (
    <>
      <MainMenu path={route.match.path} />
      <MainArea title={ROOM_TEXT.title} subtitled={ROOM_TEXT.subtitled}>
        <SearchBox />
        <BoxArea>
          {rooms.map(item => (
            <RoomList
              key={`RoomList${item.id}`}
              data={item}
              pathTo={`/room/chat/${item.id}`}
            />
          ))}
        </BoxArea>
      </MainArea>
    </>
  );
};

export default Room;
