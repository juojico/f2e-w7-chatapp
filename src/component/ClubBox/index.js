import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Box from "../Box";
import Text from "../Text";
import fire from "../../asset/icon/fire-red.svg";
import board from "../../asset/ui/board-bg.png";

const BoxWrapper = styled(Box)`
  margin-bottom: 46px;
`;
const Board = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -37px;
  left: 50%;
  width: 171px;
  height: 34px;
  margin-left: -85px;
  color: #ffe1b4;
  text-shadow: 0 0 6px #48360c;
  font-weight: bolder;
  font-style: italic;
  background: url(${board});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ContentArea = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: stretch;
  justify-content: center;
  border-bottom: 1px solid #5b472a;
`;

const PlayingBox = styled.div`
  flex-grow: 1;
`;

const NextBox = styled.div`
  flex-grow: 1;
  padding-left: 12px;
  font-size: 10px;
`;

const PlayList = styled.ul`
  padding-left: 1.5em;
  li {
    padding-bottom: 1em;
  }
`;

const Footer = styled.div`
  padding-top: 16px;
  font-size: 12px;
  span {
    color: ${props => props.theme.whitegrey};
    font-style: italic;
    padding-right: 1em;
  }
`;

const FireBox = styled.div`
  float: right;
`;

const Fire = styled.div`
  display: inline-block;
  width: 16px;
  height: 14px;
  background: url(${fire});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: ${props => (props.on ? 1 : 0.3)};
`;

const MakeFire = (num, id) => {
  let hots = [];
  const nowRatio = Math.floor(num / 30);
  for (let i = 0; i < 5; i++) {
    if (i < 5 - nowRatio) {
      hots.push(<Fire key={`${id}fire${i}`} />);
    } else {
      hots.push(<Fire key={`${id}fire${i}`} on />);
    }
  }
  return hots;
};

const ClubBox = ({ data, ...props }) => {
  return (
    <BoxWrapper {...props}>
      <Board>NO# {data.id}</Board>
      <ContentArea>
        <PlayingBox>
          <Text
            themeColor="whitegrey"
            size="12px"
            bottom="10px"
            fontStyle="italic"
          >
            Now playing
          </Text>
          <iframe
            title={`playing${data.id}`}
            width="100%"
            height="auto"
            src={data.playing}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </PlayingBox>
        <NextBox>
          <Text
            themeColor="whitegrey"
            size="12px"
            bottom="10px"
            fontStyle="italic"
          >
            Next...
          </Text>
          <PlayList>
            {data.playList.map((item, index) => (
              <li key={`playList${index}`}>{item}</li>
            ))}
          </PlayList>
        </NextBox>
      </ContentArea>

      <Footer>
        <span>Online users</span>
        {data.online}
        <FireBox>{MakeFire(data.online, data.id)}</FireBox>
      </Footer>
    </BoxWrapper>
  );
};

ClubBox.propTypes = {
  data: propTypes.object
};

export default ClubBox;
