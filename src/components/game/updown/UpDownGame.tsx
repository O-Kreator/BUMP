import React from 'react';
import styled, { css } from 'styled-components';
import { Center, HorizontallyCenter, VerticallyCenter } from '../util/Center';
import { ReactComponent as ArrowBigUpSvg } from '../../assets/arrow_big_up.svg';
import { ReactComponent as ArrowBigDownSvg } from '../../assets/arrow_big_down.svg';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import { ReactComponent as InputButtonIcon } from '../../assets/input_button.svg';
import LowerNumbers from './numbers/LowerNumbers';

const identityColor = '#28dca0';

const Background = styled.div``;

const Logo = styled(LogoSvg)`
  position: absolute;
  left: 48px;
  top: 48px;
`;

const ArrowUp = styled(ArrowBigUpSvg)`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -154px;
  margin-left: -164px;

  width: 110px;
  height: 115px;
`;

const ArrowDown = styled(ArrowBigDownSvg)`
  position: absolute;
  right: 50%;
  bottom: 50%;
  margin-bottom: -154px;
  margin-right: -164px;

  width: 110px;
  height: 115px;
`;

const GameName = styled.p`
  position: absolute;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  right: 48px;
  top: 48px;
  margin: 0;
  font-weight: 900;
  line-height: 1rem;
  letter-spacing: 0.5em;
  font-size: 1rem;
`;

const StripeBox = styled.div`
  background-image: linear-gradient(
    135deg,
    ${identityColor} 25%,
    #ffffff 25%,
    #ffffff 50%,
    ${identityColor} 50%,
    ${identityColor} 75%,
    #ffffff 75%,
    #ffffff 100%
  );
  background-size: 22.63px 22.63px;
  background-position: center center;
  position: absolute;
  ${Center}
  height: 192px;
  transition: width 0.1s ease;
  z-index: -2;
`;

const UnknownAnswer = styled.div`
  z-index: 10;
  font-size: 4.5rem;
  font-weight: 700;
  width: 96px;
  height: 96px;
  ${Center}
  line-height: 92px;
  text-align: center;
  background: white;
`;

const NumberInputWrap = styled.div`
  ${HorizontallyCenter}
  width: 144px;
  bottom: 48px;
`;

const NumberInput = styled.input`
  z-index: 30;

  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;

  width: 144px;
  height: 32px;
  line-height: 28px;

  border: none;
  border-bottom: 4px black solid;

  -moz-appearance: textfield;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const NumberButton = styled.button`
  position: absolute;
  z-index: 30;
  width: 32px;
  background-color: transparent;
  border: none;
  right: 0;
  bottom: 4px;
`;

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

const Indicator = styled.div<{ showOnLeft: boolean }>`
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
    <>
      <Logo width="64px" height="64px" />
      <GameName>001 - UP AND DOWN</GameName>

      <StripeBox style={{ width: `${(currentTime / maxTime) * 100}%` }} />
      <UnknownAnswer>?</UnknownAnswer>

      <ArrowUp />
      <ArrowDown />

      <CenterWrap>
        <TopWrap>
          <Level>Level 7</Level>
          <Time>{currentTime.toFixed(1)}</Time>
        </TopWrap>
        <Stick />
        <Message>Bigger!</Message>
      </CenterWrap>

      <LowerNumbers numbers={[12, 18, 24, 36, 48]} />
      <HigherNumbers numbers={[60, 72]} />

      <Indicator showOnLeft={false} />

      <NumberInputWrap>
        <NumberInput type="number" min={0} max={100} />
        <NumberButton>
          <InputButtonIcon width="24px" height="24px" />
        </NumberButton>
      </NumberInputWrap>
    </>
  );
}
