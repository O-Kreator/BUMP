import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowBigUpSvg } from '../../../assets/updown-arrow_big_up.svg';
import { ReactComponent as ArrowBigDownSvg } from '../../../assets/updown-arrow_big_down.svg';

const ArrowUp = styled(ArrowBigUpSvg)`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -154px;
  margin-left: -164px;

  width: 110px;
  height: 115px;
`;

const ArrowDown = styled(ArrowBigDownSvg)`
  position: absolute;
  right: 50%;
  bottom: 50%;
  margin-bottom: -154px;
  margin-right: -164px;

  width: 110px;
  height: 115px;
`;

export default function UpDownIndicator(props: { up: boolean }) {
  return props.up ? <ArrowUp /> : <ArrowDown />;
}
