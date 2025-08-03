import styled from "styled-components";
import { fadeAction, mediaQuery } from "../../style/global.style";
import Layout from "../Layout";
import FirstLayer from "./FirstLayer";
import SecondLayer from "./SecondLayer";
import ThirdLayer from "./ThirdLayer";
import { FlexColumnDiv } from "style/utility.style";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function Main() {
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
    <Layout title="main">
      <MainContainer>
        <FirstLayer />
        <SecondLayer />
        <ThirdLayer />
        <MotiveWrapper>
          <MotiveMain>'진짜 나'를 찾는 I AM의 여정에 함께해보세요.</MotiveMain>
          <MotiveHeader onClick={() => movePage("/project/history")}>
            프로그램 보러 가기 <ArrowRightIcon />
          </MotiveHeader>
        </MotiveWrapper>
      </MainContainer>
    </Layout>
  );
}

const MainContainer = styled(FlexColumnDiv)`
  animation: 0.6s ease-in-out ${fadeAction};
`;

const MotiveWrapper = styled.div`
  width: 100%;
  padding: 100px 0px;
  background: #f8f8f8;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-image: url("https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/c1b33447-6342-4192-3cee-1e76f8f80800/public");
  background-position: center;
  background-size: cover;

  ${mediaQuery.mobile} {
    margin-bottom: 120px;
  }
`;

const MotiveHeader = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;

  svg {
    width: 20px;
    color: white;
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

const MotiveMain = styled.div`
  font-size: clamp(1.5rem, 2.5vw, 3.5rem);
  font-weight: 900;
  margin-bottom: 10px;
  color: white;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.1);

  ${mediaQuery.pad} {
    padding: 0px 20px;
  }
`;
