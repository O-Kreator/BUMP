import React from 'react';
import styled from 'styled-components';
import { VerticallyCenter } from '../../../util/Center';

const Wrap = styled.div`
  ${VerticallyCenter}
  right: 50%;
  text-align: right;

  margin-right: 72px;
  
  transition: .2s;

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    margin-right: 42px;
  }
`;

const Number = styled.span`
  position: relative;
  
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-right: 36px;

  transition: .2s;

  &:last-child {
    margin-right: 0;

    font-size: 2rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    bottom: 2px;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    font-size: 1rem;
    line-height: 2rem;
    margin-right: 18px;

    &:last-child {
      font-size: 1.5rem;
    }

    &:not(:last-child) {
      bottom: 3px;
    }
  }
`;

export default function LowerNumbers(props: { numbers: number[] }) {
  return (
    <Wrap>
      {props.numbers.map(num => (
        <Number key={num}>{num}</Number>
      ))}
    </Wrap>
  );
}
