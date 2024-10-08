import styled from "styled-components";
import { formatWithOptions } from "util";
import { mediaQuery } from "../../style/global.style";

export default function SecondLayer() {
  return (
    <SecondLayerContainer>
      <ImageWrapper>
        <WhoIam src="/assets/wau2.png" />
      </ImageWrapper>
    </SecondLayerContainer>
  );
}

const SecondLayerContainer = styled.div`
  background-image: url("/assets/boy.png");
  background-position: center;
  background-size: cover;
  height: 792px;
  position: relative;

  ${mediaQuery.pad} {
    height: 554px;
  }

  ${mediaQuery.mobile} {
    height: 396px;
  }
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
