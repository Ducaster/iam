import { useState, useRef } from "react";
import styled from "styled-components";
import { LayerWrapper, Layer } from "./Project";
import { mediaQuery } from "../../style/global.style";

const WhoIAM = () => {
  const [showThumbnail, setShowThumbnail] = useState(true);
  const introVideo = useRef<HTMLVideoElement | null>(null);

  const handleThumbnailClick = () => {
    if (introVideo.current) {
      introVideo.current.play();
      setShowThumbnail(false);
    }
  };

  const handleVideoEnded = () => {
    setShowThumbnail(true);
  };

  const handleLinkToApply = () => {
    window.open(
      "https://the-form.io/forms/survey/response/32c34765-a419-4987-84b3-777308f5be42",
      "_blank"
    );
  };

  return (
    <LayerWrapper>
      <Layer>
        <div>PROGRAM INTRODUCTION</div>
        {/* <IntroTitle src="assets/WhoIAM-IntroductionTitle(PC).png" /> */}
        {/* <MobileIntroTitle src="assets/WhoIAM-IntroductionTitle(Mobile).png" /> */}

        <IntroThumbnail
          src="assets/WhoIAM-IntroductionImg.png"
          showThumbnail={showThumbnail}
          onClick={handleThumbnailClick}
        />
        <IntroVideo
          ref={introVideo}
          showThumbnail={showThumbnail}
          onEnded={handleVideoEnded}
          controls
          controlsList="nodownload"
          disablePictureInPicture
        >
          <source src="assets/WhoIAm_Video.mp4" type="video/mp4" />
        </IntroVideo>

        {/* <IntroText src="assets/WhoIAM-IntroductionText(PC).png" /> */}
        {/* <MobileIntroText src="assets/WhoIAM-IntroductionText(Mobile).png" /> */}

        <div className="max-w-2xl text-gray-800">
          <div className="font-bold text-2xl">About 'Who I AM'</div>
          <div>
            <div className="mt-1 text-base text-gray-400">
              I AM Creator 양성 과정 'Who I AM'은 진짜 나를 발견하고 성장할 수
              있도록 돕는 프로그램입니다. 인류의 고전인 바이블을 기반으로 한
              학습과 함께 전문적인 코치들의 코칭, 다양한 참여형 프로그램으로
              구성되어 있습니다.
            </div>
          </div>
          <div className="text-center mt-12">
            <div className="text-xl font-bold">프로그램 구성</div>
            <div className="text-sm font-bold">Program Composition</div>
          </div>
        </div>
      </Layer>
      <Layer>
        {/* <Composition src="assets/WhoIAM-Composition(PC).png" />
      <MobileComposition src="assets/WhoIAM-Composition(Mobile).png" /> */}
        <div className="max-w-2xl text-gray-800">
          <div className="grid grid-flow-row gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <div>
                  <img
                    className="object-cover w-full h-full shadow-md"
                    src="/assets/project_whoiam_1.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="font-bold">학습</div>
                  <div className="text-gray-400 text-sm">learning</div>
                </div>
              </div>
              <div className="">
                <div>
                  <img
                    className="object-cover w-full h-full shadow-md"
                    src="/assets/project_whoiam_2.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="font-bold">교류</div>
                  <div className="text-gray-400 text-sm">interaction</div>
                </div>
              </div>
              <div className="">
                <div>
                  <img
                    className="object-cover w-full h-full shadow-md"
                    src="/assets/project_whoiam_3.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="font-bold">체험</div>
                  <div className="text-gray-400 text-sm">experience</div>
                </div>
              </div>
              <div className="">
                <div>
                  <img
                    className="object-cover w-full h-full shadow-md"
                    src="/assets/project_whoiam_1.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="font-bold">코칭</div>
                  <div className="text-gray-400 text-sm">coaching</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center py-12 bg-gray-100 text-gray-800">
          <div className="grid grid-flow-row gap-6">
            <div>
              <div className="text-xl font-bold">STEP 1</div>
              <div className="">기초 학습과 코칭</div>
              <div className="text-sm text-gray-400">2개월</div>
            </div>
            <div>
              <div className="text-xl font-bold">STEP 2</div>
              <div className="">핵심 학습과 코칭</div>
              <div className="text-sm text-gray-400">3개월</div>
            </div>
            <div>
              <div className="text-xl font-bold">STEP 3</div>
              <div className="">심화 학습과 실습</div>
              <div className="text-sm text-gray-400">4개월</div>
            </div>
          </div>
        </div>
      </Layer>
      <Layer>
        {/* <Schedule src="assets/WhoIAM-Schedule(PC).png" />
        <MobileSchedule src="assets/WhoIAM-Schedule(Mobile).png" /> */}

        <div className="max-w-2xl text-gray-800 w-full">
          <div className="text-center">
            <div className="text-xl font-bold">프로그램 일정표</div>
            <div className="text-sm font-bold">Schedule</div>
          </div>
          <div className="grid grid-flow-row gap-6 mt-12">
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div>15 minute</div>
                <div className="text-right">준비 및 복습</div>
              </div>
              <div className="grid grid-cols-1  border-b border-gray-200 text-right">
                <div className="text-gray-400 text-sm">Preparation and Review</div>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div>40 minute</div>
                <div className="text-right">강의 1교시</div>
              </div>
              <div className="grid grid-cols-1  border-b border-gray-200 text-right">
                <div className="text-gray-400 text-sm">1st Period of Lecture</div>
              </div>   <div className="grid grid-cols-2 border-b border-gray-200">
                <div>10 minute</div>
                <div className="text-right">휴식 시간</div>
              </div>
              <div className="grid grid-cols-1  border-b border-gray-200 text-right">
                <div className="text-gray-400 text-sm">Rest Time</div>
              </div>   <div className="grid grid-cols-2 border-b border-gray-200">
                <div>40 minute</div>
                <div className="text-right">강의 2교시</div>
              </div>
              <div className="grid grid-cols-1  border-b border-gray-200 text-right">
                <div className="text-gray-400 text-sm">2st Period of Lecture</div>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div>30 minute</div>
                <div className="text-right">팀별 모임</div>
              </div>
              <div className="grid grid-cols-1  border-b border-gray-200 text-right">
                <div className="text-gray-400 text-sm">Meeting by Team</div>
              </div>
            </div>
              <div className="text-sm text-gray-400 text-center">매 기수별 커리큘럼에 의해 운영 순서 및 시간은 상이할 수 있음</div>
          </div>
        </div>
      </Layer>
      <Layer>
        <ApplyBtn onClick={handleLinkToApply}>Who I AM 신청하기</ApplyBtn>
      </Layer>
    </LayerWrapper>
  );
};

export default WhoIAM;

// Intro 비디오
const IntroThumbnail = styled.img<{ showThumbnail: boolean }>`
  display: ${(props) => (props.showThumbnail ? "block" : "none")};
  width: 100vw;

  ${mediaQuery.mobile} {
    height: 32vh;
  }
`;

const IntroVideo = styled.video<{ showThumbnail: boolean }>`
  display: ${(props) => (!props.showThumbnail ? "block" : "none")};
  width: 100vw;

  ${mediaQuery.mobile} {
    height: 32vh;
  }
`;

// PC 해상도
const IntroTitle = styled.img`
  width: 15vw;
  margin-top: 20px;

  ${mediaQuery.mobile} {
    display: none;
  }
`;

const IntroText = styled(IntroTitle)`
  width: 40vw;
`;

const Composition = styled(IntroTitle)`
  width: 100vw;
`;
const Schedule = styled(IntroTitle)`
  width: 35vw;
`;

// Mobile 해상도
const MobileIntroTitle = styled.img`
  display: none;
  width: 35vw;
  margin-top: 20px;

  ${mediaQuery.mobile} {
    display: block;
  }
`;

const MobileIntroText = styled(MobileIntroTitle)`
  width: 95vw;
  margin-top: 0px;
  margin-left: 30px;
`;

const MobileComposition = styled(MobileIntroTitle)`
  width: 100vw;
`;
const MobileSchedule = styled(MobileIntroTitle)`
  width: 100vw;
`;
const ApplyBtn = styled.button`
  background-color: #525252;
  color: white;
  font-size: 18px;
  padding: 10px 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px 0px;
  cursor: pointer;
`;
