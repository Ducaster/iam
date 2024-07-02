import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap') format('woff');
    font-weight: 400;
    font-style: normal;
} */
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

  body {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Pretendard-Regular', sans-serif;
}
`;

const LAYOUT_BREAK_POINT = {
  MOBILE: 420,
  PAD: 1000,
  MAC: 1440,
};

const createMediaQuery = (mediaPx: number): string => {
  return `@media(max-width: ${mediaPx}px)`;
};

//미디어쿼리 생성
export const mediaQuery = {
  mobile: createMediaQuery(LAYOUT_BREAK_POINT.MOBILE),
  pad: createMediaQuery(LAYOUT_BREAK_POINT.PAD),
  mac: createMediaQuery(LAYOUT_BREAK_POINT.MAC),
};

//컬러셋
export const colorSet = {
  base: "#232253",
  purple: "#4c3e9f",
  pink: "#ec047a",
  darkPink: "#b22490",
  skyBlue: "#72b0eb",
  yellow: "#ffca60",
  orange: "#fb834c",
};

//페이드 애니메이션
export const fadeAction = keyframes`
  0% {
    opacity:0
  }

  100% {
    opacity: 1;
  }
`;

//페이드+위로 움직임
export const fadeMoveAction = keyframes`
  0% {
    transform: trangrayY(30px);
    opacity:0
  }

  100% {
    transform: trangrayY(0px);
    opacity: 1;
  }
`;

//페이드+위로 움직임+딜레이
export const fadeMoveActionDelay = keyframes`
  0% {
    transform: trangrayY(30px);
    opacity:0
  }

  30% {
    transform: trangrayY(30px);
    opacity:0
  }

  100% {
    transform: trangrayY(0px);
    opacity: 1;
  }
`;

//페이드+확장
export const fadeExpand = keyframes`
  0% {
    transform: scale(0%);
    opacity:0
  }


  100% {
    transform: scale(100%);
    opacity: 1;
  }
`;

//페이드+오른쪽에서이동
export const fadeSlide = keyframes`
  0% {
    transform: trangrayX(60%);
    opacity:0
  }


  100% {
    transform: trangrayX(0%);
    opacity: 1;
  }
`;

export const fadeSlideOut = keyframes`
  0% {
    transform: trangrayX(0%);
    opacity:1
  }


  100% {
    transform: trangrayX(60%);
    opacity: 0;
  }
`;

//페이드아웃
export const fadeOut = keyframes`
  0% {
    opacity:1
  }

  100% {
    opacity: 0;
  }
`;

//드롭다운 배경용
export const DropdonwBg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: -1;
`;
