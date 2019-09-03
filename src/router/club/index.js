import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CLUB_TEXT, MOCK_CLUBS } from "../../constant/club";
import ClubBox from "../../component/ClubBox";
import MainMenu from "../../component/MainMenu";
import MainArea from "../../component/MainArea";
import Store from "../../store";

const clubs = MOCK_CLUBS;

const BoxArea = styled.div`
  padding: 40px 26px;
  a {
    text-decoration: none;
  }
`;

const Club = route => {
  const value = useContext(Store);
  const txt = value.text.club;
  return (
    <>
      <MainMenu path={route.match.path} />
      <MainArea title={txt.title} subtitled={txt.subtitled}>
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
