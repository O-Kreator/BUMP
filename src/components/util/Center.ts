import { css } from 'styled-components';

export const HorizontallyCenter = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const VerticallyCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const Center = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
