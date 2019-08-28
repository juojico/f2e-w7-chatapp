import React from "react";
import styled from "styled-components";
import { CLUB_TEXT, MOCK_CLUBS } from "../../constant/club";
import MainArea from "../../component/MainArea";

const clubs = MOCK_CLUBS;

const BoxArea = styled.div`
  padding: 20px 40px;
`;

const Club = () => {
  return (
    <MainArea title={CLUB_TEXT.title} subtitled={CLUB_TEXT.subtitled}>
      <BoxArea>{clubs.map(item=>item.id)}</BoxArea>
    </MainArea>
  );
};

export default Club;
