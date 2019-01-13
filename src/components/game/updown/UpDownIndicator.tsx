import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowUpSvg } from '../../../assets/updown-arrow_up.svg';
import { ReactComponent as ArrowDownSvg } from '../../../assets/updown-arrow_down.svg';

const ArrowUp = styled(ArrowUpSvg)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 110px;
  height: 115px;

  transition: .2s;

  @media screen and (min-width: 768px) and (min-height: 576px) {
    margin-top: -154px;
    margin-left: -164px;
  }

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    margin-top: -143px;
    margin-left: -164px;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    width: 50px;
    height: 58px;
    
    margin-top: -86px;
    margin-left: -108px;

    #letters {
      display: none;
    }
  }
`;

const ArrowDown = styled(ArrowDownSvg)`
  position: absolute;
  right: 50%;
  bottom: 50%;
  width: 110px;
  height: 115px;

  transition: .2s;

  @media screen and (min-width: 768px) and (min-height: 576px) {
    margin-bottom: -154px;
    margin-right: -164px;
  }

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    margin-bottom: -143px;
    margin-right: -164px;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    width: 50px;
    height: 58px;
    
    margin-bottom: -86px;
    margin-right: -108px;

    #letters {
      display: none;
    }
`;

export default function UpDownIndicator(props: { up: boolean }) {
  return props.up ? <ArrowUp /> : <ArrowDown />;
}
