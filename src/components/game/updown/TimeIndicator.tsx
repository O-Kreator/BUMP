import React from 'react';
import styled from 'styled-components';
import { identityColor } from '../../../constants';
import { Center } from '../../util/Center';

const StripeBox = styled.div`
  z-index: -2;
  transition: width 0.1s ease, height 0.2s ease;

  position: absolute;
  ${Center}
  
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

  @media screen and (min-width: 768px) and (min-height: 576px) {
    height: 192px;
  }

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    height: 168px;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    height: 112px;
  }
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
