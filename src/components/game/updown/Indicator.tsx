import React from 'react';
import styled from 'styled-components';
import { Center, VerticallyCenter } from '../../util/Center';
import { identityColor } from '../../../constants';
import UpDownIndicator from './UpDownIndicator';

const Stick = styled.div`
  width: 4px;
  height: 288px;
  background-color: ${identityColor};
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
  padding-left: 0.5em;
  margin-bottom: 16px;
  color: ${identityColor};
`;

const Time = styled.div`
  font-weight: 900;
  font-size: 2em;
  margin-bottom: 16px;
  color: ${identityColor};
`;

const Message = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 16px;
  margin-bottom: 54px;
`;

const LastAnswerIndicator = styled.div<{ showOnLeft: boolean }>`
  ${VerticallyCenter}
  z-index: -1;
  background-color: ${identityColor};
  width: calc(50% - 48px);
  height: 144px;

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
