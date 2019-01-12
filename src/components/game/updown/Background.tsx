import React from 'react';
import styled from 'styled-components';

import BackgroundPattern from '../../../assets/updown-background.svg';

const BackgroundLeftWrapper = styled.div`
z-index: -10;

    position: absolute;
    top: 0; bottom: 0; left: 0;
    right: 50%;
    overflow: hidden;
`;

const BackgroundRightWrapper = styled.div`
    z-index: -10;
    
    position: absolute;
    top: 0; bottom: 0; right: 0;
    left: 50%;
    overflow: hidden;
`;

const BackgroundLeft = styled.div`
    @keyframes scrollLeftToRight {
        from { transform: translateX(0); }
        to { transform: translateX(80px); }
    }

    position: absolute;
    right: 0; top: 0;
    width: calc( 100% + 80px ); height: 100%;
    background: url( ${BackgroundPattern} );
    background-size: 80px 46px;
    
    animation-name: scrollLeftToRight;
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`;

const BackgroundRight = styled.div`
    @keyframes scrollRightToLeft {
        from { transform: scaleX(-1) translateX(0); }
        to { transform: scaleX(-1) translateX(80px); }
    }

    position: absolute;
    left: 0; top: 0;
    width: calc( 100% + 80px ); height: 100%;
    background: url( ${BackgroundPattern} );
    background-size: 80px 46px;
    
    animation-name: scrollRightToLeft;
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`;

export default function Background() {
    return (
        <>
          <BackgroundLeftWrapper>
              <BackgroundLeft></BackgroundLeft>
          </BackgroundLeftWrapper>
          <BackgroundRightWrapper>
              <BackgroundRight></BackgroundRight>
          </BackgroundRightWrapper>
        </>
    );
}