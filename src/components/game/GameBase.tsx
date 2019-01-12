import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

const Logo = styled(LogoSvg)`
  position: absolute;
  transition: .2s;

  @media screen and (min-width: 768px) and (min-height: 576px) {
    left: 48px; top: 48px;
  }

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    left: 18px; top: 18px;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    width: 32px; height: 32px;
  }

`;

const GameTitle = styled.p`
  position: absolute;
  transition: .2s;
  margin: 0;

  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-weight: 900;

  font-size: 1rem;
  line-height: 12px;
  letter-spacing: 0.5em;

  @media screen and (min-width: 768px) and (min-height: 576px) {
    right: 48px; top: 48px;
  }

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    right: 18px; top: 18px;
  }

  @media screen and (max-width: 375px), screen and (max-height: 568px) {
    font-size: 0.75rem;
    line-height: 9px;
    letter-spacing: 0.3em;
  }
  
`;

export default function GameBase(props: {
  title: string;
  children: React.ReactNode[];
}) {
  return (
    <>
      <Logo width="64px" height="64px" />
      <GameTitle>{props.title}</GameTitle>
      {props.children}
    </>
  );
}
