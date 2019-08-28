import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Text from "../Text";

const MainWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 32px;
  padding-bottom: 85px;
  background-color: ${props => props.theme.primary};
  overflow-y: auto;
`;

const Header = styled.div`
  padding: 0 26px;
`;

const MainArea = ({ children, title, subtitled, ...props }) => {
  return (
    <MainWrapper {...props}>
      <Header>
        <Text type='p2'>{subtitled}</Text>
        <Text type='h1'>{title}</Text>
      </Header>
      {children}
    </MainWrapper>
  );
};

MainArea.propTypes = {
  title: propTypes.string,
  subtitled: propTypes.string
};

MainArea.defaultProps = {};

export default MainArea;
