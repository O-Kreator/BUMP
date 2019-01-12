import React from 'react';

const Wrap = styled.div`
  ${VerticallyCenter}
  margin-left: 72px;
  left: 50%;

  display: flex;
  align-items: center;
`;

const Number = styled.span`
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-left: 36px;

  &:first-child {
    font-size: 2rem;
    font-weight: 700;
    margin-left: 0;
  }
`;

export default function LowerNumbers(props: { numbers: number[] }) {
  return (
    <Wrap>
      {numbers.map(num => (
        <Number key={num}>{num}</Number>
      ))}
    </Wrap>
  );
}
