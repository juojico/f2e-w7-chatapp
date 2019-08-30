import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BAR_TEXT, MOCK_BARS } from "../../constant/bar";
import MainArea from "../../component/MainArea";
import Label from "../../component/Label";
import BarBox from "../../component/BarBox";

const bars = MOCK_BARS;

const FilterArea = styled.div`
  padding: 20px 26px;
  display: block;
  overflow-x: auto;
`;

const LabelBox = styled.div`
  display: inline-flex;
`;

const BoxArea = styled.div`
  padding: 4px 26px;
`;

const Bar = () => {
  const [label, setLabel] = useState(0);

  return (
    <MainArea title={BAR_TEXT.title} subtitled={BAR_TEXT.subtitled}>
      <FilterArea className="myScroll">
        <LabelBox>
          {BAR_TEXT.filter.map((item, index) => {
            return (
              <Label
                key={`label${index}`}
                text={item}
                icon={item}
                active={label === index ? true : false}
                onClick={() => setLabel(index)}
              />
            );
          })}
        </LabelBox>
      </FilterArea>
      <BoxArea>
        {bars.map(item => {
          return (
            <Link key={`barBox${item.name}`} to={"/chat/"}>
              <BarBox data={item} />
            </Link>
          );
        })}
      </BoxArea>
    </MainArea>
  );
};

export default Bar;
