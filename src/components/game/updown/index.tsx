import React from 'react';
import styled, { css } from 'styled-components';

import {
  Center,
  HorizontallyCenter,
  VerticallyCenter
} from '../../util/Center';

import GameBase from '../GameBase';
import LowerNumbers from './numbers/LowerNumbers';
import HigherNumbers from './numbers/HigherNumbers';

import Indicator from './Indicator';
import TimeIndicator from './TimeIndicator';

import { identityColor } from '../../../constants';
import Background from './Background';
import { ReactComponent as InputButtonIcon } from '../../../assets/input_button.svg';




const UnknownAnswer = styled.div`
  z-index: 10;

  font-size: 4.5rem;
  font-weight: 700;
  
  width: 96px;
  height: 96px;
  line-height: 92px;

  ${Center}
  text-align: center;
  background: white;

  transition: .2s;

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    font-size: 2rem;
    width: 48px; height: 48px;
    line-height: 44px;
  }
`;

const NumberInputWrap = styled.div`
  ${HorizontallyCenter}
  transition: .2s;
  
  width: 144px;

  @media screen and (min-width: 768px) and (min-height: 576px) {
    bottom: 48px;
  }

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    bottom: 18px;
  }
  
`;

const NumberInput = styled.input`
  z-index: 30;
  transition: .2s;

  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;

  width: 100%;
  height: 32px;
  line-height: 28px;

  border: none;
  border-bottom: 4px black solid;
  background: none;

  -moz-appearance: textfield;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    font-size: 1rem;
    height: 24px;
    border-bottom: 2px black solid;
  }
`;

const NumberButton = styled.button`
  z-index: 30;  
  transition: .2s;

  position: absolute;
  
  width: 32px;
  background-color: transparent;
  border: none;
  right: 0;
  bottom: 4px;
`;

const InputButtonIconStyled = styled(InputButtonIcon)`
  position: relative;
  width: 24px; height: 24px;
  transition: .2s;

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    width: 16px; height: 16px;
    bottom: -1px;
  }
`;


export default function UpDownGame() {
  const [currentTime, setCurrentTime] = React.useState(20);
  const [maxTime, setMaxTime] = React.useState(20);

  React.useEffect(
    () => {
      if (currentTime > 0) {
        const id = setInterval(() => {
          setCurrentTime(prev => +(prev - 0.1).toFixed(1));
        }, 100);

        return () => clearInterval(id);
      }
      return;
    },
    [currentTime]
  );

  return (
    <GameBase title="001 - UP AND DOWN">
      <Background></Background>
      <TimeIndicator currentTime={currentTime} maxTime={maxTime} />
      <UnknownAnswer>?</UnknownAnswer>

      <Indicator level={7} currentTime={currentTime} up={true} />

      <LowerNumbers numbers={[12, 18, 24, 36, 48]} />
      <HigherNumbers numbers={[60, 72]} />

      <NumberInputWrap>
        <NumberInput type="number" min={0} max={100} />
        <NumberButton>
          <InputButtonIconStyled />
        </NumberButton>
      </NumberInputWrap>
    </GameBase>
  );
}
