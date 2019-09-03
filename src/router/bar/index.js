import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BAR_TEXT, MOCK_BARS } from "../../constant/bar";
import Label from "../../component/Label";
import BarBox from "../../component/BarBox";
import MainMenu from "../../component/MainMenu";
import MainArea from "../../component/MainArea";
import Store from "../../store";

const bars = MOCK_BARS;

const FilterArea = styled.div`
  padding: 20px 26px 10px 26px;
  display: block;
  overflow-x: auto;
`;

const LabelBox = styled.div`
  display: inline-flex;
`;

const BoxArea = styled.div`
  padding: 14px 26px;
  a {
    text-decoration: none;
  }
`;

const Bar = route => {
  const value = useContext(Store);
  const txt = value.text.bar;
  const [label, setLabel] = useState(0);

  return (
    <>
      <MainMenu path={route.match.path} />
      <MainArea title={txt.title} subtitled={txt.subtitled}>
        <FilterArea className='myScroll'>
          <LabelBox>
            {txt.filter.map((item, index) => {
              return (
                <Label
                  key={`label${index}`}
                  text={item}
                  icon={index}
                  active={label === index ? true : false}
                  onClick={() => setLabel(index)}
                />
              );
            })}
          </LabelBox>
        </FilterArea>
        <BoxArea>
          {bars.map(item => {
            if (label === 0 || label === item.type) {
              return (
                <Link key={`barBox${item.name}`} to={`/bar/chat/${item.id}`}>
                  <BarBox data={item} />
                </Link>
              );
            } else {
              return null;
            }
          })}
        </BoxArea>
      </MainArea>
    </>
  );
};

export default Bar;
