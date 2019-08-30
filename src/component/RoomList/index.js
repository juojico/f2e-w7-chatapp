import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Text from "../Text";
import Img from "../Img";

const ListWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 28px 0;
  border-bottom: 1px solid black;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 16px;
    top: 100%;
    margin-top: -8px;
    background: radial-gradient(1px at 2px 13px, #9b1000 100%, transparent 100%),
      radial-gradient(1px at 2px 3px, #b19046 100%, transparent 100%);
    background-size: 9px 100%;
  }
  &:last-child {
    border-bottom: 1px solid transparent;
    &::after {
      opacity: 0;
    }
  }
`;

const MesBox = styled.div`
  flex-grow: 1;
  padding-left: 10px;
`;

const RoomList = ({ data, ...props }) => {
  return (
    <ListWrapper {...props}>
      <Img src={data.avatar} width="40px" height="40px" />
      <MesBox>
        <Text
          themeColor="black"
          size="14px"
          bottom="4px"
          fontStyle="italic"
          fontWeight="bold"
        >
          {data.name}
        </Text>
        <Text themeColor="darkgrey" size="16px">
          {data.lastMes}
        </Text>
      </MesBox>
    </ListWrapper>
  );
};

RoomList.propTypes = {
  data: propTypes.object
};

export default RoomList;
