import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AppWrap = styled.div`
  margin: 0;
`;

export default function App() {
  return (
    <AppWrap>
      Learn React - RanolP with Doro-nyong
      <ul>
        <li>
          <Link to="/updown">Up Down Game</Link>
        </li>
      </ul>
    </AppWrap>
  );
}
