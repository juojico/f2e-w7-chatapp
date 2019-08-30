import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CLUB_TEXT, MOCK_CLUBS } from "../../constant/club";
import ClubBox from "../../component/ClubBox";
import MainMenu from "../../component/MainMenu";
import MainArea from "../../component/MainArea";

const clubs = MOCK_CLUBS;

const BoxArea = styled.div`
  padding: 40px 26px;
  a {
    text-decoration: none;
  }
`;

const Club = route => {
  return (
    <>
      <MainMenu path={route.match.path} />
      <MainArea title={CLUB_TEXT.title} subtitled={CLUB_TEXT.subtitled}>
        <BoxArea>
          {clubs.map((item, index) => {
            return (
              <Link key={`club${index}`} to={`/club/chat/${item.id}`}>
                <ClubBox key={`clubBox${item.id}`} data={item} />
              </Link>
            );
          })}
        </BoxArea>
      </MainArea>
    </>
  );
};

export default Club;
