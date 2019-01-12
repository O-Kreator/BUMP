import React from 'react';
import styled from 'styled-components';
import { identityColor } from '../../../constants';
import { Center } from '../../util/Center';

const StripeBox = styled.div`
  background-image: linear-gradient(
    135deg,
    ${identityColor} 25%,
    rgba(40, 220, 160, 0) 25%,
    rgba(40, 220, 160, 0) 50%,
    ${identityColor} 50%,
    ${identityColor} 75%,
    rgba(40, 220, 160, 0) 75%,
    rgba(40, 220, 160, 0) 100%
  );
  background-size: 22.63px 22.63px;
  background-position: center center;
  position: absolute;
  ${Center}
  height: 192px;
  transition: width 0.1s ease;
  z-index: -2;
`;

export default function TimeIndicator(props: {
  currentTime: number;
  maxTime: number;
}) {
  return (
    <StripeBox
      style={{ width: `${(props.currentTime / props.maxTime) * 100}%` }}
    />
  );
}
