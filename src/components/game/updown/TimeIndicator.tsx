import React from 'react';
import styled from 'styled-components';
import { identityColor } from '../../../constants';
import { Center } from '../../util/Center';

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
