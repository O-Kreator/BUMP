import React, { Component } from "react";
import styled from "styled-components";

const AppWrap = styled.div`
  margin: 0;
`;

export default function App() {
  return (
    <AppWrap>
      Learn React - RanolP with Doro-nyong
      <ul>
        <li>
          <a href="/updown">Up Down Game</a>
        </li>
      </ul>
    </AppWrap>
  );
}
