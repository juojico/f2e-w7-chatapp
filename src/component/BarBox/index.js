import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Box from "../Box";
import Text from "../Text";
import wine from "../../asset/avatar/wine.svg";
import martini from "../../asset/avatar/martini.svg";
import seat from "../../asset/icon/bar-seat.svg";

const Header = styled.div`
  padding-bottom: 24px;
  display: flex;
`;

const Name = styled.div`
  display: inline-block;
  width: 20px;
  font-size: 10px;
  text-align: right;
  writing-mode: vertical-lr;
`;

const Description = styled.div`
  flex-grow: 1;
  padding-left: 20px;
`;

const Content = styled.div`
  padding: 24px 0;
  border-top: 1px solid #5b472a;
  border-bottom: 1px solid #5b472a;
`;

const TextLabel = styled.div`
  display: inline-block;
  margin-right: 1em;
  margin-bottom: 0.25em;
  color: ${props => props.theme.primary};
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
`;

const SeatBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const Seat = styled.div`
  width: 15px;
  height: 21px;
  background: url(${seat});
  background-repeat: no-repeat;
  background-position: center;
  opacity: ${props => (props.off ? 0.5 : 1)};
`;

const ICON = {
  JOYFUL: martini,
  RELAXED: wine,
  INTENSE: wine
};

const MakeSeat = (total, able) => {
  let seats = [];
  for (let i = 0; i < total; i++) {
    if (i < able) {
      seats.push(<Seat key={`seat${i}`} />);
    } else {
      seats.push(<Seat key={`seat${i}`} off />);
    }
  }
  return seats;
};

const BarBox = ({ data, ...props }) => {
  return (
    <Box {...props}>
      <Header>
        <Name>{data.name}</Name>
        <img src={ICON[data.name]} alt={data.name} />
        <Description>
          <Text
            themeColor="whitegrey"
            size="10px"
            bottom="4px"
            fontStyle="italic"
          >
            The bar of
          </Text>
          <Text
            themeColor="white"
            size="24px"
            bottom="2px"
            fontWeight="bold"
            fontStyle="italic"
          >
            {data.description}
          </Text>
          <Text themeColor="white" size="10px">
            Feel free to talk about today.
          </Text>
        </Description>
      </Header>

      <Content>
        <Text themeColor="whitegrey" size="10px" bottom="4px">
          Now we are talking about
        </Text>
        {data.nowTalking.map(item => (
          <TextLabel key={`textLabel${item}`}>{item}</TextLabel>
        ))}
      </Content>

      <Text themeColor="whitegrey" size="10px" top="16px" bottom="4px">
        Seat available : {data.seatAble}
      </Text>
      <SeatBox>{MakeSeat(data.seats, data.seatAble)}</SeatBox>
    </Box>
  );
};

BarBox.propTypes = {
  data: propTypes.object
};

export default BarBox;
