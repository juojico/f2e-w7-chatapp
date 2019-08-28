import React from "react";
import styled, { keyframes } from "styled-components";
import Img from "../Img";
import owl from "../../asset/ui/owl.svg";
import gearL from "../../asset/ui/gear-l.png";
import gearS from "../../asset/ui/gear-s.png";

const OwlWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 60px;
  margin: 42px auto 30px auto;
`;

const gearRotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const GearL = styled.div`
  position: absolute;
  width: 58px;
  height: 58px;
  top: 0;
  left: 34px;
  background-image: url(${gearL});
  background-size: contain;
  animation: ${gearRotate} 12s linear infinite;
`;

const GearS = styled(GearL)`
  width: 35px;
  height: 35px;
  top: 21px;
  left: 0;
  background-image: url(${gearS});
  animation: ${gearRotate} 6s linear reverse infinite;
`;

const Owl = () => {
  return (
    <OwlWrapper>
      <GearL />
      <GearS />
      <Img src={owl} width='43px' height='56px' top='7px' left='24px' z='2' />
    </OwlWrapper>
  );
};

export default Owl;
