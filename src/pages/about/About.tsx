import styled from "styled-components";
import AnotherHeader from "../../components/AnotherHeader";
import { fadeAction, mediaQuery } from "../../style/global.style";
import Layout from "../Layout";

export default function About() {
  return (
    <Layout title="about">
      <AnotherHeader />
      <AboutPageContainer>
        <div className="max-w-2xl text-slate-800">
          <div className="text-3xl mb-5 font-bold">
            OUR
            <br />
            STORY
          </div>
          {/* notice */}
          <div className="grid grid-flow-col gap-6">
            <div className="h-full">
              <img
                className="h-full object-cover"
                src="/assets/about_1.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="font-bold text-2xl">Motive</div>
              <div>
                <div className="mt-5 font-bold text-sm">Exodus 3:14</div>
                <div className="mt-1 text-md text-slate-400">
                  14. God said to Moses, "I am who I am. This is what you are to
                  say to the Israelites: 'I AM has sent me to you.' "
                </div>
                <div className="mt-5 font-bold text-sm">출애굽기 3:14</div>
                <div className="mt-1 text-md text-slate-400">
                  14. 하나님이 모세에게 이르시되 나는 스스로 있는 자니라 또
                  이르시되 너는 이스라엘 자손에게 이같이 이르기를 스스로 있는
                  자가 나를 너희에게 보내셨다 하라
                </div>
              </div>
            </div>
          </div>
          {/* undersanding */}
          <div className="grid gap-6 grid-flow-col mt-12">
            <div>
              <div className=" font-bold">
                <div className="text-2xl">Your New Understanding</div>
                <div className="text-base">
                  언더스탠딩 : 지금껏 놓쳐온 새로운 이해
                </div>
              </div>
              <div>
                <div className="mt-5 text-md text-slate-400">
                  우리는 매일 어떤 결정을 하고 행동을 합니다. 어떤 분들은 결정과
                  행동의 성공 확률이 굉장히 높습니다. 또 어떤 분들은 성공 확률이
                  매우 낮습니다. We make certain decisions and act every day.
                  Some people have a very high probability of success in their
                  decisions and actions. Also, some people can see that the
                  probability of success is very low.
                </div>
                <div className="mt-1 text-md text-slate-400">
                  어떤 선택이 모이느냐에 따라서 우리의 인생은 정말 큰 차이가
                  나게 됩니다. 좋은 선택을 하는 분들을 가리켜 우리는 보통
                  ‘현명하다.’고 합니다. 그렇다면 이 현명함은 과연 어디서 오는
                  걸까요? Our lives really make a big difference depending on
                  what choices we make. We usually say "wise" to those who make
                  good choices. So where does this wisdom really come from?
                </div>
              </div>
            </div>
            <div className="h-full">
              <img
                className="h-full object-cover"
                src="/assets/about_2.jpg"
                alt=""
              />
            </div>
          </div>
          {/* -- */}
          <div className="mt-12 text-md text-slate-400 ">
            우리가 생각하기에는 세상에 대한 총체적이고 바른 이해가 중요하다고
            생각합니다. ‘세상을 폭 넓게 이해하고, 현명한 판단과 실행을 통해서
            인생의 중요한 기회를 놓치지 않는 것.’ 바로 그것이 지금 우리에게
            필요한 ‘지혜’라고 생각합니다. In our opinion, it is important to
            have a holistic and correct understanding of the world. "Don't miss
            important opportunities in life through a broad understanding of the
            world and wise judgment and execution." I think that's the wisdom we
            need now.
          </div>
          <div className="mt-1 text-md text-slate-400">
            그래서 저희 ‘I AM’에서 이러한 지혜를 기를 수 있는 다양한 프로그램을
            만들어 연대하고 있습니다. 다방면에 걸친 다양한 지혜로 정성스럽게
            만든 프로그램을 여러분들과 나누어 연대하기를 소망합니다. Therefore,
            we are working together to create various programs that can develop
            this wisdom with "IAM". We ask you to share and unite with us in a
            program that we carefully created with a variety of wisdom.
          </div>

          {/* vision */}
          <div className="grid grid-flow-col gap-6 mt-12">
            <div className="h-full">
              <img
                className="h-full object-cover"
                src="/assets/about_3.jpg"
                alt=""
              />
            </div>
            <div>
              <div className=" font-bold">
                <div className="text-2xl">Our Vision</div>
                <div className="text-base">우리가 믿고 추구하는 것</div>
                <div className="text-base">What We Believe and Pursue</div>
              </div>
              <div>
                <div className="mt-5 font-bold">
                  <div>1. 세상을 폭 넓고 바르게 이해하기</div>
                  <div>Understanding the world widely and correctly</div>
                </div>
                <div className="mt-1 text-slate-400">
                  배우고 습득하는 일은 아름다운 일이지만, 배우기만 하고 자기
                  것은 없다면 내 삶의 주인공은 자기 자신이 맞을까요? ‘다른
                  사람이 만든 기준이 아닌 자기가 만든 기준으로 살아가는 삶.’을
                  찾기 위해서는 세상을 폭 넓고 그리고 바르게 이해하는 것이 가장
                  중요하다고 생각합니다. ‘I AM’의 다양한 프로젝트를 통하여
                  우리가 얼마나 강하고 아름다운 존재인지 확인할 수 있습니다.
                  Learning and learning is beautiful, but if learning is not all
                  about me, is the main character of my life right for me? I
                  think it is most important to understand the world widely and
                  correctly in order to find a life that lives by the standards
                  that others have made, not by others. Through various projects
                  of "I AM," you can see how strong and beautiful we are.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 font-bold">
            2. 지식을 넘어 지혜로, 이해를 넘어 연대하기
          </div>
          <div className="mt-1 text-slate-400">
            Solidarity beyond knowledge to wisdom and beyond understanding
            우리는 사회와 어떤 관계를 맺으며 살아가야 할까요? 우리가
            생각하기에는 ‘단편적인 지식을 넘어, 통합적인 지혜를 추구하는 삶.’,
            ‘세상을 바르게 이해하여 사회와 연대하며 더불어 살아가는 삶.’ 이것이
            우리가 멈추지 말고 추구해야 할 본질이라고 생각합니다. ‘I AM’은
            각자의 기준 속 질서를 찾아 새로운 창조의 동력을 만들어 갑니다. What
            kind of relationship should we have with society? In our opinion, "a
            life that pursues integrated wisdom beyond fragmentary knowledge"
            and "a life that understands the world correctly and lives in
            solidarity with society" are the essence that we should pursue
            without stopping. "IAM" finds order within their own standards and
            creates new creative engines.
          </div>
          <div className="mt-12 font-bold">
            3. 우리의 문화를 나누어 세상을 더 낫게 만들기
          </div>
          <div className="mt-1 text-slate-400">
            Share Our Culture and Make The World Better 넘쳐나는 이야기와 미디어
            속에 ‘나 다움’은 없고 다른 사람의 꿈만 쫓아 살아갑니다. 다른 사람의
            목소리에 휩쓸리지 않고 ‘나 자신’을 돌아보는 경험이 세상을 더 낫게
            만들거라고 믿습니다. ‘I AM’은 여러분의 앞으로 쓰여질 각자의 드라마의
            주인공이 ‘나 자신’이 되기를 기원합니다. There is no "me-like" in the
            overflowing stories and media, but they only follow other people's
            dreams. I believe that the experience of looking back on "self"
            without being swept away by other people's voices will make the
            world better. "I AM" hopes that the main character of each drama in
            your future will be "Self."
          </div>
        </div>
        {/* <FirstLayer></FirstLayer> */}
        {/* <SecondLayer></SecondLayer> */}
        {/* <ThirdLayer></ThirdLayer> */}
        {/* <FourthLayer></FourthLayer> */}
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
