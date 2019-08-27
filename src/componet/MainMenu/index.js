import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuArea = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 85px;
  bottom: 0;
  background-color: ${props => props.theme.grey};
  backdrop-filter: blur(10px);
  z-index: 100;
`;

const MainMenu = () => {
  return (
    <MenuArea>
      <Link to='/'>HALL</Link>
      <Link to='/bar/'>BAR</Link>
      <Link to='/club/'>CLUB</Link>
      <Link to='/room/'>ROOM</Link>
    </MenuArea>
  );
};

export default MainMenu;
