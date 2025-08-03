import styled from "styled-components";
import { fadeMoveAction, mediaQuery } from "../../style/global.style";
import { FlexDiv } from "style/utility.style";

export default function FirstLayer() {
  return (
    <FirstLayerContainer>
      <BackgroundVideo autoPlay muted loop>
        <VideoSource src="assets/main.mp4" type="video/mp4" />
      </BackgroundVideo>
      <OverlayText>
        <div>나라는 나침반을 따라</div>
        <div>'진짜 나'를 찾는 사람들</div>
        <div>I AM creators' team</div>
      </OverlayText>
      {/* <ImageWrapper>
        <WhoAreYou src="assets/wau1.png" />
      </ImageWrapper> */}
    </FirstLayerContainer>
  );
}

const FirstLayerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`;
const VideoSource = styled.source`
  width: 100%;
  height: 100%;
`;
const OverlayText = styled.div`
  position: absolute;
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  pointer-events: none; // 클릭 방해 방지
  animation: 0.8s ease-in-out ${fadeMoveAction};

  div:first-child,
  div:nth-child(3) {
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 700;
    color: #ecececf;
  }

  div:nth-child(2) {
    font-size: clamp(2rem, 5vw, 5rem);
    font-weight: 900;
    margin: 20px 0px;
  }
`;
const ImageWrapper = styled(FlexDiv)`
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 5px;
`;
const WhoAreYou = styled.img`
  width: 280px;

  ${mediaQuery.pad} {
    width: 196px;
  }

  ${mediaQuery.mobile} {
    width: 140px;
  }
`;
