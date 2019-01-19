import { css } from 'styled-components';
type Prefix = 'min' | 'max';

/**
 * creates Media Query
 * @params {boolean} isDesktopHD whether css will be OR (true) or AND (false)
 * @params {Prefix} widthPrefix minimum (min) or maximum (max) of width
 * @params {number} widthValue pixel setup for width
 * @params {Prefix} heightPrefix minimum (min) or maximum (max) of height
 * @params {number} heightValue pixel setup for height
 * @return {string} media query css
 */
const createMediaQuery = (
  isDesktopHD: boolean,
  widthPrefix: Prefix,
  widthValue: number,
  heightPrefix: Prefix,
  heightValue: number
) => (style: string) => `
    @media screen and (${widthPrefix}-width: ${widthValue}px)${
  !isDesktopHD ? ', screen' : ''
} and (${heightPrefix}-height: ${heightValue}px) {
        ${style}
    }
`;

/**
 * 스타일 리스트들
 */
const styles = {
  /**
   * 데스크탑 HD이상 지정 함수
   */
  cssDesktopHD: (style: string) =>
    createMediaQuery(true, 'min', 768, 'min', 576)(style),
  /**
   * HD미만 데스크탑 지정 함수
   */
  cssDesktop: (style: string) =>
    createMediaQuery(false, 'max', 767, 'max', 575)(style),
  /**
   * Mobile 데스크탑 지정 함수
   */
  cssMobile: (style: string) =>
    createMediaQuery(false, 'max', 375, 'max', 568)(style)
};

/**
 * 미디어 쿼리를 생성합니다.
 *
 * @params {Object} 옵션
 * @return {FlattenSimpleInterpolation} 생성된 CSS
 */
export default function mediaQuery(option: {
  /**
   * cssDesktopHD HD 이상의 스크린에서 표시할 내용 (가로 768px 이상, 세로 576px 이상)
   */
  cssDesktopHD?: string;
  /**
   * cssDesktop HD 미만의 데스크탑 스크린에서 표시할 내용 (가로 767px 이하, 세로 575px 이하)
   */
  cssDesktop?: string;
  /**
   * cssMobile 모바일 스크린에서 표시할 내용 (가로 375px 이하, 세로 568px 이하)
   */
  cssMobile?: string;
}) {
  return css`
    ${option.cssDesktopHD ? styles.cssDesktopHD(option.cssDesktopHD) : ''}
    ${option.cssDesktop ? styles.cssDesktop(option.cssDesktop) : ''}
    ${option.cssMobile ? styles.cssMobile(option.cssMobile) : ''}
    `;
}
