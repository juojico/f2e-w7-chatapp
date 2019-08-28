import React from "react";
import styled from "styled-components";
import { CLUB_TEXT, MOCK_CLUBS } from "../../constant/club";
import MainArea from "../../component/MainArea";
import ClubBox from "../../component/ClubBox";

const clubs = MOCK_CLUBS;

const BoxArea = styled.div`
  padding: 40px 26px;
`;

const Club = () => {
  return (
    <MainArea title={CLUB_TEXT.title} subtitled={CLUB_TEXT.subtitled}>
      <BoxArea>
        {clubs.map(item => {
          return <ClubBox key={`clubBox${item.id}`} data={item} />;
        })}
      </BoxArea>
    </MainArea>
  );
};

export default Club;
