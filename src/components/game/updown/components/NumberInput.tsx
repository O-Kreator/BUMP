import React, { KeyboardEvent } from 'react'; //뀨
import styled from 'styled-components';

import { HorizontallyCenter } from '../../../util/Center';

import { ReactComponent as InputButtonIcon } from '../../../../assets/input_button.svg';

import mediaQuery from '../../../util/MediaQuery';

const InputWrap = styled.div`
  ${HorizontallyCenter}
  transition: .2s;

  width: 144px;

  @media screen and (min-width: 768px) and (min-height: 576px) {
    bottom: 48px;
  }

  @media screen and (max-width: 767px), screen and (max-height: 575px) {
    bottom: 18px;
  }
`;

const Input = styled.input`
  z-index: 30;
  transition: 0.2s;

  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;

  width: 100%;
  height: 32px;
  line-height: 28px;

  border: none;
  border-bottom: 4px black solid;
  background: none;

  -moz-appearance: textfield;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${mediaQuery(
    `none`,
    `none`,
    `font-size: 1rem;
    height: 24px;
    border-bottom: 2px black solid;`
  )}
`;

const Button = styled.button`
  z-index: 30;
  transition: 0.2s;

  position: absolute;

  width: 32px;
  background-color: transparent;
  border: none;
  right: 0;
  bottom: 4px;
`;

const InputButtonIconStyled = styled(InputButtonIcon)`
  position: relative;
  width: 24px;
  height: 24px;
  transition: 0.2s;


  ${mediaQuery(
    ``,
    ``,
    `width: 16px;
    height: 16px;
    bottom: -1px;`
  )}
`;

const Number = /^[0-9]+$/;


export default function NumberInput(props: {
  min: number;
  max: number;
  onNumberSubmit: (answer: number) => void;
}) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  /**
   * Pass the value written in input to the event handler.
   */
  function submit() {
    if (inputRef.current && Number.test(inputRef.current.value)) {
      const parsed = parseInt(inputRef.current.value);
      if (parsed < props.min || parsed > props.max) {
        return;
      }
      props.onNumberSubmit(parsed);
      inputRef.current.value = '';
    }
  }

  /**
   * If player press the 'enter' key, execute submit().
   * @params e the event received
   */
  function onKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    const keyVal = e.which || e.keyCode;
    if (keyVal === 13) {
      submit();
    }
  }

  return (
    <InputWrap>
      <Input
        ref={inputRef}
        type="number"
        min={props.min}
        max={props.max}
        onKeyPress={onKeyPress}
      />
      <Button onClick={submit}>
        <InputButtonIconStyled />
      </Button>
    </InputWrap>
  );
}
