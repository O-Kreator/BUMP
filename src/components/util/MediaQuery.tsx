import { css } from "styled-components";
type Prefix = 'min' | 'max' ;


const createMediaQuery = (
    isDesktopHD: boolean,
    widthPrefix: Prefix, widthValue: number,
    heightPrefix: Prefix, heightValue: number
) => (style: string) => `
    @media screen and (${widthPrefix}-width: ${widthValue}px)${(!isDesktopHD) ? (", screen") : ("")} and (${heightPrefix}-height: ${heightValue}px) {
        ${style}
    }
`;

const styles = {
    cssDesktopHD: (style: string) => createMediaQuery(true, 'min', 768, 'min', 576)(style),
    cssDesktop: (style: string) => createMediaQuery(false, 'max', 767, 'max', 575)(style),
    cssMobile: (style: string) => createMediaQuery(false, 'max', 375, 'max', 568)(style),
}

/**
 * 미디어 쿼리를 생성합니다.
 * 
 * @params {string} cssDesktopHD HD 이상의 스크린에서 표시할 내용 (가로 768px 이상, 세로 576px 이상)
 * @params {string} cssDesktop HD 미만의 데스크탑 스크린에서 표시할 내용 (가로 767px 이하, 세로 575px 이하)
 * @params {string} cssMobile 모바일 스크린에서 표시할 내용 (가로 375px 이하, 세로 568px 이하)
 * @return {FlattenSimpleInterpolation} 생성된 CSS
 */
export default function mediaQuery(
    cssDesktopHD : string,
    cssDesktop : string,
    cssMobile : string
    ) {
    let result: string = "";
    (cssDesktopHD !== "none") ? result += styles.cssDesktopHD(cssDesktopHD) : result += "";
    (cssDesktop !== "none") ? result += styles.cssDesktop(cssDesktop) : result += "";
    (cssMobile !== "none") ? result += styles.cssMobile(cssMobile) : result += "";
    console.log(result);
    return css`${result}`;
};