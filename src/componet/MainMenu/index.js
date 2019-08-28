import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hall from "../../asset/icon/menu-hall.svg";
import bar from "../../asset/icon/menu-bar.svg";
import club from "../../asset/icon/menu-club.svg";
import room from "../../asset/icon/menu-room.svg";

const MenuArea = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 85px;
  bottom: 0;
  padding: 6px;
  font-size: 10px;
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.grey};
  backdrop-filter: blur(10px);
  z-index: 100;
  a {
    font-weight: bold;
    color: ${props => props.theme.primary};
    text-decoration-line: none;
    letter-spacing: 3px;
  }
  & > a {
    opacity: 0.52;
    transition: 0.5s;
    &:nth-child(${props => props.active}) {
      opacity: 1;
    }
  }
  img {
    display: block;
    margin: 4px auto;
  }
`;

const MainMenu = () => {
  const [page, setPage] = useState(1);
  return (
    <MenuArea active={page}>
      <Link to='/' onClick={() => setPage(1)}>
        <img src={hall} alt='HALL' />
        HALL
      </Link>
      <Link to='/bar/' onClick={() => setPage(2)}>
        <img src={bar} alt='BAR' />
        BAR
      </Link>
      <Link to='/club/' onClick={() => setPage(3)}>
        <img src={club} alt='CLUB' />
        CLUB
      </Link>
      <Link to='/room/' onClick={() => setPage(4)}>
        <img src={room} alt='ROOM' />
        ROOM
      </Link>
    </MenuArea>
  );
};

export default MainMenu;
