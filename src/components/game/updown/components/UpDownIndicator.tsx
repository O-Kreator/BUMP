import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowUpSvg } from '../../../../assets/updown-arrow_up.svg';
import { ReactComponent as ArrowDownSvg } from '../../../../assets/updown-arrow_down.svg';
import { IndicatorType } from './indicatorType';

import mediaQuery from '../../../util/MediaQuery';

const ArrowUp = styled(ArrowUpSvg)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 110px;
  height: 115px;

  transition: 0.2s;

  user-drag: none; 
  user-select: none;

  ${mediaQuery(
    `margin-top: -154px;
    margin-left: -164px;`,
    `margin-top: -143px;
    margin-left: -164px;`,
    `width: 50px;
    height: 58px;

    margin-top: -86px;
    margin-left: -108px;

    #letters {
      display: none;
    }`
  )}
`;

const ArrowDown = styled(ArrowDownSvg)`
  position: absolute;
  right: 50%;
  bottom: 50%;
  width: 110px;
  height: 115px;

  transition: .2s;

  user-drag: none; 
  user-select: none;

  ${mediaQuery(
    `margin-bottom: -154px;
    margin-right: -164px;`,
    `margin-bottom: -143px;
    margin-right: -164px;`,
    `width: 50px;
    height: 58px;
    
    margin-bottom: -86px;
    margin-right: -108px;

    #letters {
      display: none;
    }`
  )}
`;

export default function UpDownIndicator(props: { type: IndicatorType }) {
  return props.type === IndicatorType.Down ? (
    <ArrowUp />
  ) : props.type === IndicatorType.Up ? (
    <ArrowDown />
  ) : null;
}
