import styled from "styled-components";
import AnotherHeader from "../../components/AnotherHeader";
import { fadeAction, mediaQuery } from "../../style/global.style";
import Layout from "../Layout";




export default function About() {
  return (
    <Layout title="about">
      <AnotherHeader />
      <AboutPageContainer>
        <FirstLayer></FirstLayer>
        <SecondLayer></SecondLayer>
        <ThirdLayer></ThirdLayer>
        <FourthLayer></FourthLayer>
      </AboutPageContainer>
    </Layout>
  );
}

const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  margin-top: 170px;
  animation: 0.6s ease-in-out ${fadeAction};
`;

const FirstLayer = styled.div`
  background-image: url("/assets/motive.png");
  background-size: cover;
  background-position: center;
  width: 669px;
  height: 343px;
  margin-bottom: 60px;

  ${mediaQuery.mobile} {
    width: 335px;
    height: 172px;
  }
`;

const SecondLayer = styled.div`
  background-image: url("/assets/understanding.png");
  background-size: cover;
  background-position: center;
  width: 669px;
  height: 1035px;
  margin-bottom: 60px;

  ${mediaQuery.mobile} {
    width: 335px;
    height: 518px;
  }
`;

const ThirdLayer = styled.div`
  background-image: url("/assets/vision.png");
  background-size: cover;
  background-position: center;
  width: 669px;
  height: 600px;

  ${mediaQuery.mobile} {
    width: 335px;
    height: 300px;
  }
`;

const FourthLayer = styled.div`
  background-image: url("/assets/vision2.png");
  background-size: cover;
  background-position: center;
  width: 669px;
  height: 464px;
  margin-bottom: 80px;

  ${mediaQuery.mobile} {
    width: 335px;
    height: 232px;
    margin-bottom: 40px;
  }
`;
