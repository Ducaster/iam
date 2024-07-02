import styled from "styled-components";
import AnotherHeader from "../../components/AnotherHeader";
import { fadeAction, mediaQuery } from "../../style/global.style";
import Layout from "../Layout";

export default function Teams() {
  return (
    <Layout>
      <AnotherHeader />
      <TeamsPageContainer>
        <div className="max-w-2xl text-slate-800">
          <div className="text-3xl mb-5 font-bold">TEAMS</div>
          {/* media */}
          <div className="grid grid-flow-row gap-6">
            <div className="h-96 flex">
              <img
                className="w-full object-cover "
                src="/assets/team_1.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="font-bold text-2xl">Media Team</div>
              <div>
                {/* <div className="mt-5 font-bold text-sm">Exodus 3:14</div> */}
                <div className="mt-1 text-md text-slate-400">
                  우리는 독창적인 예술성을 지닌 사람들이 모여 창조적인
                  아름다움을 만듭니다. 아름다운 문화는 사회를 더 낫게 만든다는
                  믿음으로 우리의 아름다운 문화를 다양한 매개로 만들어 세상에
                  전하고자 합니다.
                </div>
                <div className="mt-1 text-md text-slate-400">
                  We bring together people with original artistry to create
                  creative beauty. With the belief that beautiful culture makes
                  society better, we would like to convey our beautiful culture
                  to the world through various mediums.
                </div>
              </div>
            </div>
          </div>
          {/* Communication Team */}
          <div className="grid grid-flow-row gap-6 mt-12">
            <div className="h-96 flex">
              <img
                className="w-full object-cover "
                src="/assets/team_2.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="font-bold text-2xl">Communication Team</div>
              <div>
                <div className="mt-1 text-md text-slate-400">
                  파편적 지식을 토대로 통합적 지혜의 꽃을 피운다는 것은 생각보다
                  어려운 일이 아닙니다. 우리는 이미 인생의 다양한 경험을 통해
                  각자 나름의 ‘지혜’를 가지고 있습니다. 이제는 시야를 더 넓혀
                  내가 경험하지 못한 다양한 분야를 새롭게 이해하여 함께 연대할
                  때입니다.
                </div>
                <div className="mt-1 text-md text-slate-400">
                  It is not as difficult as I thought to bloom integrated wisdom
                  based on fragmentary knowledge. We already have our own
                  "wisdom" through various experiences in life. From now on, it
                  is time to broaden our horizons and understand and unite with
                  various fields that I have never experienced before.
                </div>
              </div>
            </div>
          </div>
          {/* Answering Team */}
          <div className="grid grid-flow-row gap-6 mt-12">
            <div className="h-96 flex">
              <img
                className="w-full object-cover "
                src="/assets/team_3.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="font-bold text-2xl">Answering Team</div>
              <div>
                <div className="mt-1 text-md text-slate-400">
                  우리는 심도 있는 자기 성찰을 통해 ‘나 다움’을 찾아갑니다.
                  ‘나는 누구인가?’라는 근원적 질문을 넘어 ‘I am who i am.’이라는
                  각자의 답을 찾아갑니다. 각자가 얻은 지혜를 나누며 더 나은
                  세상을 만들기 위해 노력합니다.
                </div>
                <div className="mt-1 text-md text-slate-400">
                  We look for "me-like" through deep self-reflection. Go beyond
                  the fundamental question of "Who am I?" and look for your own
                  answer, "I am who am." We will try to share the wisdom we have
                  gained and create a better world.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <FirstLayer></FirstLayer>
        <SecondLayer></SecondLayer> */}
        {/* <ThirdLayer></ThirdLayer> */}
      </TeamsPageContainer>
    </Layout>
  );
}

const TeamsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 170px;
  animation: 0.6s ease-in-out ${fadeAction};
`;
const FirstLayer = styled.div`
  background-image: url("/assets/media.png");
  background-size: cover;
  background-position: center;
  width: 690px;
  height: 548px;
  margin-bottom: 60px;

  ${mediaQuery.mobile} {
    width: 345px;
    height: 274px;
  }
`;
const SecondLayer = styled.div`
  background-image: url("/assets/communication.png");
  background-size: cover;
  background-position: center;
  width: 690px;
  height: 589px;
  margin-bottom: 60px;

  ${mediaQuery.mobile} {
    width: 345px;
    height: 299px;
  }
`;
const ThirdLayer = styled.div`
  background-image: url("/assets/answering.png");
  background-size: cover;
  background-position: center;
  width: 690px;
  height: 543px;
  margin-bottom: 60px;

  ${mediaQuery.mobile} {
    width: 345px;
    height: 272px;
  }
`;
