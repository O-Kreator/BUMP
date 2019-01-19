import React from 'react';
import styled from 'styled-components';
import { VerticallyCenter } from '../../../util/Center';

import mediaQuery from '../../../util/MediaQuery';

const Wrap = styled.div`
  ${VerticallyCenter}
  left: 50%;
  text-align: left;
  
  margin-left: 72px;

  transition: .2s;

  ${mediaQuery(
    `none`,
    `none`,
    `margin-left: 42px;`
  )}
`;

const Number = styled.span<{ underlined: boolean }>`
  position: relative;

  font-size: 1.5rem;
  margin-left: 36px;

  transition: .2s;

  user-drag: none; 
  user-select: none;
  
  &:first-child {
    margin-left: 0;
    
    font-size: 2rem;
    font-weight: 700;
  }
  
  &:not(:first-child) {
    bottom: 2px;
  }

  ${mediaQuery(
    `none`,
    `none`,
    `font-size: 1rem;
    margin-left: 18px;

    &:first-child {
      font-size: 1.5rem;
    }

    &:not(:first-child) {
      bottom: 3px;
    }`
  )}

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
