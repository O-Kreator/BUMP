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
 * Style Objects
 */
const styles = {
  /**
   * Desktops better than HD systems
   */
  cssDesktopHD: (style: string) =>
    createMediaQuery(true, 'min', 768, 'min', 576)(style),
  /**
   * for Tablets or less resolution Desktops
   */
  cssDesktop: (style: string) =>
    createMediaQuery(false, 'max', 767, 'max', 575)(style),
  /**
   * for Mobile
   */
  cssMobile: (style: string) =>
    createMediaQuery(false, 'max', 375, 'max', 568)(style)
};

/**
 * create media queries
 *
 * @params {Object} option css mediaQueries
 * @return {FlattenSimpleInterpolation} CSS Outputs
 */
export default function mediaQuery(option: {
  /**
   * CSS for Desktops better than HD systems
   */
  cssDesktopHD?: string;
  /**
   * CSS for Tablets or less resolution Desktops
   */
  cssDesktop?: string;
  /**
   * CSS for Mobile
   */
  cssMobile?: string;
}) {
  return css`
    ${option.cssDesktopHD ? styles.cssDesktopHD(option.cssDesktopHD) : ''}
    ${option.cssDesktop ? styles.cssDesktop(option.cssDesktop) : ''}
    ${option.cssMobile ? styles.cssMobile(option.cssMobile) : ''}
    `;
}
