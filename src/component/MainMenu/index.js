import React from "react";
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
    text-decoration-line: none;
  }
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 48px;
  font-weight: bold;
  color: ${props => props.theme.primary};
  letter-spacing: 3px;
  opacity: 0.52;
  transition: 0.5s;
`;

const MenuImg = [hall, bar, club, room];

const MainMenu = ({ path }) => {
  return (
    <MenuArea>
      {MAIN_MENU.map((item, index) => {
        return (
          <Link key={`mainMenu${index}`} to={item.path}>
            <MenuItem style={{ opacity: path === item.path ? 1 : 0.5 }}>
              <img src={MenuImg[index]} alt={item.name} />
              {item.name}
            </MenuItem>
          </Link>
        );
      })}
    </MenuArea>
  );
};

export default MainMenu;
