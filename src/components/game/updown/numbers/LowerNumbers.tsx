import React from 'react';
import styled from 'styled-components';
import { VerticallyCenter } from '../../../util/Center';

import mediaQuery from '../../../util/MediaQuery';

const Wrap = styled.div`
  ${VerticallyCenter}
  right: 50%;
  text-align: right;

  margin-right: 72px;
  
  transition: .2s;

  ${mediaQuery(
    {
    cssMobile: `margin-right: 42px;`
    }
  )}
`;

const Number = styled.span<{ underlined: boolean }>`
  position: relative;
  
  font-size: 1.5rem;
  margin-right: 36px;

  transition: .2s;

  user-drag: none; 
  user-select: none;

  &:last-child {
    margin-right: 0;

    font-size: 2rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    bottom: 3px;
  }

  ${mediaQuery({
    cssMobile: `font-size: 1rem;
    margin-right: 18px;

    &:last-child {
      font-size: 1.5rem;
    }

    &:not(:last-child) {
      bottom: 3px;
    }`
  })}
  
  ${({underlined}) => underlined && 'text-decoration: underline;'}
`;

export default function LowerNumbers(props: { lastInput?: number, numbers: number[] }) {
  return (
    <Wrap>
      {props.numbers.map((number, index) => (
        <Number underlined={index === props.lastInput} key={index}>{number}</Number>
      ))}
    </Wrap>
  );
}
