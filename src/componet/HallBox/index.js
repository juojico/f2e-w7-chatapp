import React from "react";
import styled from "styled-components";
import Text from "../Text";

const HallBoxWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 25px;
  color: white;
  background-color: black;
  text-align: left;
`;

const HallBox = ({ title, content, ...props }) => {
  return (
    <HallBoxWrapper {...props}>
      <Text color="white" size="18px" top="13px" bottom="8px">{title}</Text>
      <Text color="white" size="14px" top="10px" bottom="10px">{content}</Text>
      <Text>Comments 55 fire</Text>
    </HallBoxWrapper>
  );
};

export default HallBox;
