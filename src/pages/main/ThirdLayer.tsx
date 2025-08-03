import styled from "styled-components";
import { mediaQuery } from "../../style/global.style";
import { FlexColumnDiv, FlexDiv, FlexDivCentered } from "style/utility.style";

export default function ThirdLayer() {
  const images = [
    "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/b7f77297-8ec6-4613-a63b-0b760694e300/public",
    "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/836efb3b-4301-4153-9fd9-1beed05a1800/public",
    "https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/9904e189-2ac2-4a15-5f25-db840c8ee700/public",
  ];

  return (
    <ThirdLayerContainer>
      <ProfileText>우리의 가치</ProfileText>
      <ImageWrapper>
        {images.map((el, idx) => (
          <SingleImage key={idx} imageUrl={el}></SingleImage>
        ))}
      </ImageWrapper>
    </ThirdLayerContainer>
  );
}

interface Url {
  imageUrl: string;
}

const ThirdLayerContainer = styled(FlexColumnDiv)`
  align-items: center;
`;

const ProfileText = styled(FlexDivCentered)`
  padding: 15px 0px;
  font-size: 32px;
  /* color: #7294ae; */
  /* font-style: italic; */
  font-weight: 900;
  box-shadow: 10 10 10 rgba(0, 0, 0);

  ${mediaQuery.mobile} {
    font-size: 22px;
  }
`;

const ImageWrapper = styled(FlexDiv)`
  width: 1000px;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 150px;

  ${mediaQuery.pad} {
    width: 100%;
  }
`;

const SingleImage = styled.div<Url>`
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  flex: 1 0 0;
  height: 540px;

  ${mediaQuery.mobile} {
    height: 540px;
  }
`;
