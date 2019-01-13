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

import { Indicator } from './Indicator';
import { IndicatorType } from './indicatorType';
import TimeIndicator from './TimeIndicator';

import NumberInput from './NumberInput';

import { identityColor } from '../../../constants';
import Background from './Background';

const UnknownAnswer = styled.div`
  z-index: 10;
  user-drag: none;
  user-select: none;

  font-size: 4.5rem;
  font-weight: 700;

  width: 96px;
  height: 96px;
  line-height: 92px;

  ${Center}
  text-align: center;
  background: white;

  transition: 0.2s;

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    font-size: 2rem;
    width: 48px;
    height: 48px;
    line-height: 44px;
  }
`;

export default function UpDownGame() {
  const max = 100;
  const min = 1;
  function createAnswer() {
    return Math.round(Math.random() * (max - min)) + min;
  }
  const [answer, setAnswer] = React.useState(createAnswer());
  const [isCorrect, setCorrect] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(35);
  const [maxTime, setMaxTime] = React.useState(35);
  const [answers, setAnswers] = React.useState<number[]>([]);
  const [lastAnswer, setLastAnswer] = React.useState<number | null>(null);
  const [level, setLevel] = React.useState(1);

  React.useEffect(
    () => {
      if (currentTime > 0 && !isCorrect) {
        const id = setInterval(() => {
          setCurrentTime(prev => Math.max(0, +(prev - 0.1).toFixed(1)));
        }, 100);

        return () => clearInterval(id);
      }
      return;
    },
    [currentTime, isCorrect]
  );

  /**
   * when number was submitted, handle the number submit
   */
  function onNumberSubmit(input: number) {
    if (answers.includes(input)) {
      return;
    }
    if (isCorrect) {
      return;
    }
    if (input === answer) {
      setCorrect(true);
      setTimeout(() => {
        setCorrect(false);
        setLevel(prev => prev + 1);
        setAnswers([]);
        setLastAnswer(null);
        const newTime = maxTime * 0.8;
        setCurrentTime(newTime);
        setMaxTime(newTime);
        setAnswer(createAnswer());
      }, 3000);
    } else {
      setCurrentTime(time => Math.max(0, time - 1));
    }
    setLastAnswer(input);
    setAnswers(before => before.concat(input));
  }

  const lowerNumbers = answers
    .filter(value => value < answer)
    .sort((a, b) => a - b);
  const higherNumbers = answers
    .filter(value => value > answer)
    .sort((a, b) => a - b);

  return (
    <GameBase id={1} title="UP AND DOWN">
      <Background />
      <UnknownAnswer>{isCorrect ? answer : '?'}</UnknownAnswer>

      <TimeIndicator currentTime={currentTime} maxTime={maxTime} />
      <Indicator
        level={level}
        currentTime={currentTime}
        type={
          !lastAnswer
            ? IndicatorType.None
            : lastAnswer > answer
            ? IndicatorType.Up
            : lastAnswer < answer
            ? IndicatorType.Down
            : IndicatorType.Correct
        }
      />

      <LowerNumbers
        lastInput={
          lastAnswer !== null && lastAnswer < answer
            ? lowerNumbers.indexOf(lastAnswer)
            : undefined
        }
        numbers={lowerNumbers}
      />
      <HigherNumbers
        lastInput={
          lastAnswer !== null && lastAnswer > answer
            ? higherNumbers.indexOf(lastAnswer)
            : undefined
        }
        numbers={higherNumbers}
      />

      <NumberInput min={min} max={max} onNumberSubmit={onNumberSubmit} />
    </GameBase>
  );
}
