import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

const Logo = styled(LogoSvg)`
  position: absolute;
  left: 48px;
  top: 48px;
`;

const GameTitle = styled.p`
  position: absolute;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  right: 48px;
  top: 48px;
  margin: 0;
  font-weight: 900;
  line-height: 1rem;
  letter-spacing: 0.5em;
  font-size: 1rem;
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
