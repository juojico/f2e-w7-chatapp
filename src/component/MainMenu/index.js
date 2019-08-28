import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MAIN_MENU } from "../../constant/menu";
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
    &:nth-child(${props => props.active + 1}) {
      opacity: 1;
    }
  }
  img {
    display: block;
    margin: 4px auto;
  }
`;

const MenuImg = [hall, bar, club, room];

const MainMenu = () => {
  const [page, setPage] = useState(0);
  return (
    <MenuArea active={page}>
      {MAIN_MENU.map((item, index) => {
        return (
          <Link key={`mainMenu${index}`} to={item.path} onClick={() => setPage(index)}>
            <img src={MenuImg[index]} alt={item.name} />
            {item.name}
          </Link>
        );
      })}
    </MenuArea>
  );
};

export default MainMenu;
