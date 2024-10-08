import styled from "styled-components";
import { mediaQuery } from "../../style/global.style";
import Layout from "../Layout";
import { FlexColumnDiv } from "style/utility.style";

export default function Terms() {
  return (
    <Layout>
      <TermsPageContainer>
        <TermsContentWrapper>
          <TermsTitle>이메일 무단수집 거부</TermsTitle>
          <Spacer />
          <EmailTerms />
        </TermsContentWrapper>
      </TermsPageContainer>
    </Layout>
  );
}

const TermsPageContainer = styled(FlexColumnDiv)`
  margin-top: 200px;
`;
const TermsContentWrapper = styled(FlexColumnDiv)`
  align-content: center;
`;
const Spacer = styled.div`
  margin-top: 25px;
`;
const TermsTitle = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  line-height: 143.992%; /* 46.077px */

  ${mediaQuery.mobile} {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
const EmailTerms = styled.div`
  background-image: url("/assets/email_terms.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 669px;
  height: 343px;
  margin-bottom: 60px;

  ${mediaQuery.mobile} {
    width: 335px;
    height: 172px;
  }
`;
