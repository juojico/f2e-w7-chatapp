import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import search from "../../asset/icon/search.svg";

const SearchBox = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;


const Search = ({ value, active, ...props }) => {
  return (
    <SearchBox active={active} {...props}>
      <img src={search} />
    </SearchBox>
  );
};

Search.propTypes = {
  value: propTypes.string
};

export default Search;
