import React from "react";
import styled from "styled-components";

const SelectBox = styled.div`
  position: absolute;
  padding: 12px;
  opacity: 0.7;
  z-index: 1;
  select {
    background-color: transparent;
    border: 1px solid black;
  }
`;

const Select = ({ onChange }) => {
  return (
    <SelectBox>
      <select onChange={onChange}>
        <option value='en'>English</option>
        <option value='zh'>中文</option>
        <option value='jing'>晶晶</option>
      </select>
    </SelectBox>
  );
};

export default Select;
