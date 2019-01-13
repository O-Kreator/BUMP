import React from 'react';
import styled from 'styled-components';
import { Center, VerticallyCenter } from '../../util/Center';
import { identityColor } from '../../../constants';
import UpDownIndicator from './UpDownIndicator';

const Stick = styled.div`
  width: 4px; height: 288px;
  background-color: ${identityColor};
  transition: .2s;

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    height: 168px;
    visibility: hidden;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    height: 112px;
  }
`;

const CenterWrap = styled.div`
  ${Center}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopWrap = styled.div`
  text-align: center;
`;

const Level = styled.div`
  font-weight: 500;
  font-size: 1.5em;
  letter-spacing: 0.5em;

  line-height: 1.5rem;
  
  padding-left: 0.5em;
  margin-bottom: 12px;
  
  color: ${identityColor};

  transition: .2s;

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 6px;
  }
`;

const Time = styled.div`
  font-weight: 900;
  font-size: 2rem;
  line-height: 2rem;
  
  margin-bottom: 16px;
  
  color: ${identityColor};

  transition: .2s;

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    display: none;
  }
`;

const Message = styled.div`
  font-weight: 500;
  font-size: 1.5rem;

  line-height: 1.5rem;
  
  margin-top: 16px;
  margin-bottom: 52px;

  transition: .2s;

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    font-size: 1rem;
    line-height: 1rem;
    margin-top: 12px;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    visibility: hidden;
    margin-bottom: 6px;
  }
`;

const LastAnswerIndicator = styled.div<{ showOnLeft: boolean }>`
  ${VerticallyCenter}
  z-index: -1;
  
  width: calc(50% - 48px);
  height: 144px;
  
  background-color: ${identityColor};
  
  transition: .2s;

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    height: 132px;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    height: 80px;
  }

  ${({ showOnLeft }) =>
    showOnLeft
      ? `
        right: 50%;
      `
      : `
        left: 50%;
      `}
`;


export default function Indicator(props: {
  level: number;
  currentTime: number;
  up: boolean;
}) {
  return (
    <>
      <UpDownIndicator up={props.up} />

      <CenterWrap>
        <TopWrap>
          <Level>Level {props.level}</Level>
          <Time>{props.currentTime.toFixed(1)}</Time>
        </TopWrap>
        <Stick />
        <Message>{props.up ? 'Bigger!' : 'Smaller!'}</Message>
      </CenterWrap>

      <LastAnswerIndicator showOnLeft={!props.up} />
    </>
  );
}
