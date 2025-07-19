import styled from "styled-components";
import { fadeAction, mediaQuery } from "../../style/global.style";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function About() {
  const navigate = useNavigate();

  //페이지 이동 함수
  const movePage = (page: string) => {
    navigate(page);

    //*페이지 최상단으로 이동
    window.scrollTo({
      top: 0,
      // behavior: "instant",
    });
  };

  return (
    <Layout title="about">
      <AboutPageContainer>
        <MainTitleWrapper>
          <MainTitle>
            <div>진짜 내가 되고 싶은 우리가 모여</div>
            <div>더 나은 세상을 향해</div>
          </MainTitle>
          <TitleImage src="https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/6e785781-848d-4051-c771-11e5c3536400/public" />
          <MainDescription>
            <div>
              “I AM Creators’ Team”은 누구나 창조적 삶을 살 수 있다고 믿는,
            </div>
            <div>
              ‘진짜 나’를 발견하고 실현하고자 하는 사람들이 모인 커뮤니티입니다.
            </div>
          </MainDescription>
        </MainTitleWrapper>
        <MotiveWrapper>
          <MotiveHeader>우리의 모티브</MotiveHeader>
          <MotiveMain>"I AM WHO I AM"</MotiveMain>
          <MotivePhrase>
            <div>
              “하나님이 모세에게 이르시되{" "}
              <span>나는 스스로 있는 자니라(I AM WHO I AM)</span>…
            </div>
            <div>
              너는 이스라엘 자손에게 이같이 이르기를 스스로 있는 자가 나를
              너희에게 보내셨다 하라” (출애굽기 3:14)
            </div>
          </MotivePhrase>
          <MotiveDescription>
            <div>‘I AM’이라는 이름은</div>
            <div> 존재의 의미를 찾는 것, 즉 나 자신으로서</div>
            <div>
              각자가 자신의 고유한 삶의 의미와 가치를 찾아가는 것을 표현합니다.
            </div>
          </MotiveDescription>
        </MotiveWrapper>
        <OurVisionWrapper>
          <OurvisionTextWrapper>
            <OurVisionHeader>우리가 믿고 추구하는 것</OurVisionHeader>
            <OurVisionList>
              <div>1. 세상을 넓고 바르게 이해하기</div>
              <div>2. 지식을 넘어 지혜와 연대로</div>
              <div>3. 우리의 문화와 삶을 나누어 세상을 더 낫게</div>
            </OurVisionList>
          </OurvisionTextWrapper>
          <OurVisionImage src="https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/77eee2b4-775f-44e1-5ff3-257a75d97900/public" />
        </OurVisionWrapper>
        <ProgramWrapper>
          <ProgramHeader>우리가 하는 일</ProgramHeader>
          <ProgramTitle>'진짜 나’를 발견하는 여정을 함께 해요.</ProgramTitle>
          <ProgramBoxWrapper>
            <ProgramBox onClick={() => movePage("/project/history")}>
              <ProgramImgWrapper>
                <img src="https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/7f728d83-dd34-44a7-0453-ace758c1fd00/public" />
                <Overlay />
              </ProgramImgWrapper>
              <ProgramDescWrapper>
                <div>강연 및 각종 프로그램</div>
                <div>
                  ‘진짜 나’를 찾고, 성장할 수 있도록 강연, 훈련, 멘토링, 다양한
                  콘텐츠를 기획·운영합니다.
                </div>
              </ProgramDescWrapper>
            </ProgramBox>
            <ProgramBox onClick={() => movePage("/project")}>
              <ProgramImgWrapper>
                <img src="https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/77d82010-7c68-47eb-17d1-89d2ed9d8a00/public" />
                <Overlay />
              </ProgramImgWrapper>
              <ProgramDescWrapper>
                <div>Who I AM</div>
                <div>
                  ‘진짜 나’를 찾고, 성장할 수 있는 체계적인 훈련 프로그램을
                  운영합니다. 강연, 코칭, 교류와 각종 프로그램을 함께 할 수
                  있습니다.
                </div>
              </ProgramDescWrapper>
            </ProgramBox>
          </ProgramBoxWrapper>
          <ProgramMore onClick={() => movePage("/project/history")}>
            더 많은 프로그램 보기
            <ArrowRightIcon />
          </ProgramMore>
        </ProgramWrapper>
      </AboutPageContainer>
    </Layout>
  );
}

const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 170px;
  animation: 0.6s ease-in-out ${fadeAction};
`;

const MainTitleWrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 120px;

  ${mediaQuery.pad} {
    width: 100%;
  }
`;

const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 50px;
  font-weight: 900;
  letter-spacing: 1px;

  ${mediaQuery.pad} {
    font-size: 35px;
    padding: 0px 20px;
  }

  ${mediaQuery.mobile} {
    font-size: 25px;
  }
`;

const TitleImage = styled.img`
  margin-top: 80px;
  border-radius: 30px;
  margin-bottom: 40px;

  ${mediaQuery.pad} {
    padding: 0px 20px;
  }

  ${mediaQuery.mobile} {
    margin-top: 50px;
  }
`;

const MainDescription = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.6;

  ${mediaQuery.pad} {
    font-size: 18px;
    padding: 0px 20px;
  }

  ${mediaQuery.mobile} {
    font-size: 12px;
  }
`;

const MotiveWrapper = styled.div`
  width: 100%;
  padding: 100px 0px;
  background: #f8f8f8;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ${mediaQuery.mobile} {
    margin-bottom: 120px;
  }
`;

const MotiveHeader = styled.div`
  font-size: 20px;
  font-weight: 800;

  ${mediaQuery.pad} {
    font-size: 18px;
    padding: 0px 20px;
  }

  ${mediaQuery.mobile} {
    font-size: 15px;
  }
`;

const MotiveMain = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 50px;

  ${mediaQuery.pad} {
    font-size: 35px;
    padding: 0px 20px;
  }

  ${mediaQuery.mobile} {
    font-size: 25px;
  }
`;

const MotivePhrase = styled.div`
  font-style: italic;
  color: #242424;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-weight: 900;
    text-decoration: underline;
  }

  ${mediaQuery.pad} {
    font-size: 14px;
    padding: 0px 20px;
  }

  ${mediaQuery.mobile} {
    font-size: 10px;
  }
`;

const MotiveDescription = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  font-weight: 800;

  ${mediaQuery.pad} {
    font-size: 18px;
    padding: 0px 20px;
  }

  ${mediaQuery.mobile} {
    font-size: 15px;
  }
`;

const OurVisionWrapper = styled.div`
  width: 1000px;
  display: flex;
  gap: 20px;
  margin-bottom: 150px;

  ${mediaQuery.pad} {
    width: 100%;
  }

  ${mediaQuery.mobile} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 120px;
  }
`;

const OurvisionTextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mediaQuery.mobile} {
    width: 100%;
  }
`;

const OurVisionHeader = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 30px;

  ${mediaQuery.pad} {
    font-size: 18px;
    padding: 0px 20px;
  }

  ${mediaQuery.mobile} {
    font-size: 15px;
  }
`;

const OurVisionList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  gap: 20px;
  font-weight: 900;

  ${mediaQuery.pad} {
    font-size: 20px;
    padding: 0px 20px;
  }

  ${mediaQuery.mobile} {
    font-size: 17px;
    margin-bottom: 20px;
  }
`;

const OurVisionImage = styled.img`
  width: 50%;

  ${mediaQuery.mobile} {
    width: 100%;
  }
`;

const ProgramWrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 1000px;

  ${mediaQuery.pad} {
    width: 100%;
  }
`;

const ProgramHeader = styled.div`
  font-size: 20px;
  font-weight: 800;

  ${mediaQuery.pad} {
    font-size: 18px;
    padding: 0px 20px;
  }

  ${mediaQuery.mobile} {
    font-size: 15px;
  }
`;

const ProgramTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 50px;

  ${mediaQuery.pad} {
    font-size: 35px;
    padding: 0px 20px;
  }

  ${mediaQuery.mobile} {
    font-size: 20px;
  }
`;

const ProgramBoxWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;

  ${mediaQuery.pad} {
    padding: 0px 20px;
  }

  ${mediaQuery.mobile} {
    flex-direction: column;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(100, 100, 100, 0.3); // 회색, 투명도 0.4
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
`;

const ProgramBox = styled.div`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.103) 0px 4px 12px;
  overflow: auto;
  cursor: pointer;
  transition: background 0.2s;

  :hover {
    background: #e7e7e7;
  }
  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const ProgramImgWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ProgramDescWrapper = styled.div`
  padding: 40px 30px 50px 30px;
  line-height: 1.5;

  div:first-child {
    font-size: 25px;
    font-weight: 900;
    margin-bottom: 10px;

    ${mediaQuery.pad} {
      font-size: 22px;
    }

    ${mediaQuery.mobile} {
      font-size: 20px;
    }
  }

  div:nth-child(2) {
    color: #636363;
    font-weight: 100;

    ${mediaQuery.pad} {
      font-size: 13px;
    }

    ${mediaQuery.mobile} {
      font-size: 11px;
    }
  }
`;

const ProgramMore = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;

  svg {
    width: 20px;
    color: black;

    ${mediaQuery.mobile} {
      width: 15px;
    }
  }

  :hover {
    text-decoration: underline;
  }

  ${mediaQuery.pad} {
    font-size: 18px;
  }

  ${mediaQuery.mobile} {
    gap: 5px;
    font-size: 15px;
  }
`;
