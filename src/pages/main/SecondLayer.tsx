import styled from "styled-components";
import { formatWithOptions } from "util";
import { mediaQuery } from "../../style/global.style";

export default function SecondLayer() {
  return (
    <SecondLayerContainer>
      <OurVisionWrapper>
        <OurvisionTextWrapper>
          <OurVisionHeader>
            <div>아이엠은 꾸준한 성장을 통해</div>
            <div>더 나은 세상을 함께 만들고 있습니다.</div>
          </OurVisionHeader>
          <OurVisionList>
            아이엠은 '진짜 나'를 찾기 위한 다양한 프로그램 및 행사를 운영하고
            있습니다.
          </OurVisionList>
        </OurvisionTextWrapper>
        <DataSeciton>
          <DataBox>
            <DataName>누적 프로그램</DataName>
            <Data>150회+</Data>
          </DataBox>
          <DataBox>
            <DataName>누적 참가자</DataName>
            <Data>1500명+</Data>
          </DataBox>
          <DataBox>
            <DataName>프로그램이수자</DataName>
            <Data>500명+</Data>
          </DataBox>
          <DataBox>
            <DataName>참여만족도</DataName>
            <Data>4.5/5.0점</Data>
          </DataBox>
        </DataSeciton>
        <span>※ 2024년 12월 기준</span>
        {/* <OurVisionImage /> */}
      </OurVisionWrapper>
    </SecondLayerContainer>
  );
}

const SecondLayerContainer = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 792px; */
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 5px;
`;

const WhoIam = styled.img`
  width: 280px;

  ${mediaQuery.pad} {
    width: 196px;
  }

  ${mediaQuery.mobile} {
    width: 140px;
  }
`;

const OurVisionWrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 150px;

  ${mediaQuery.pad} {
    width: 100%;
  }

  ${mediaQuery.mobile} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 120px;
  }

  span {
    color: #535353;
    font-weight: 200;
  }
`;

const OurvisionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
`;

const OurVisionHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 30px;
  gap: 10px;

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
  font-size: 20px;
  font-weight: 200;

  ${mediaQuery.pad} {
    font-size: 20px;
    padding: 0px 20px;
  }

  ${mediaQuery.mobile} {
    font-size: 17px;
    margin-bottom: 20px;
  }
`;

const OurVisionImage = styled.div`
  aspect-ratio: 16/9;
  background-image: url("https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/c1b33447-6342-4192-3cee-1e76f8f80800/public");
  background-position: center;
  background-size: cover;
  border-radius: 20px;

  ${mediaQuery.mobile} {
    width: 100%;
  }
`;

const DataSeciton = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 80px;
`;

const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DataName = styled.div`
  font-size: 25px;
`;

const Data = styled.div`
  font-size: 70px;
  font-weight: 900;
`;
