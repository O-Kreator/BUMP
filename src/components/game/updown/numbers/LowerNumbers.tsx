import React from 'react';
import styled from 'styled-components';
import { VerticallyCenter } from '../../../util/Center';

const Wrap = styled.div`
  ${VerticallyCenter}
  margin-right: 72px;
  right: 50%;

  display: flex;
  align-items: center;
`;

const Number = styled.span`
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-right: 36px;

  &:last-child {
    font-size: 2rem;
    font-weight: 700;
    margin-right: 0;
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
