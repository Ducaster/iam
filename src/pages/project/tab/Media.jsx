import {
  LayerWrapper,
  Layer,
  LayerImage,
  LayerText,
} from "../../../style/basic.style";

export const Media = () => {
  return (
    <>
      <LayerWrapper>
        <Layer>
          <LayerImage src="assets/media_image_1.png"></LayerImage>
          {/* <LayerText className="a" src="assets/media_text_1.png"></LayerText> */}
          <div className="max-w-2xl text-gray-800">
            <div className="text-center mt-5">
              <div className="text-2xl font-bold">오늘 그리고 시작</div>
              <div className="font-bold">Today, and Beginning</div>
            </div>
            <div className="text-center">
              <div className="mt-5 text-base">
                우리의 새로움은 오늘 시작됩니다. 청년 예술인들의 열정과 함께하는
                ‘오늘 그리고 시작’은 세대를 초월한다는 마음으로 다양한 세대가
                함께 즐길 수 있는 공연을 제작하여 함께하고 있습니다.
              </div>
              <div className="mt-1 text-base text-gray-400">
                Our novelty starts today. With the passion of young artists in
                the church, "Today and the Beginning" is producing and sharing
                performances that can be enjoyed by various generations with the
                feeling of transcending generations.
              </div>
            </div>
          </div>
        </Layer>
        <Layer>
          <LayerImage src="assets/media_image_2.png"></LayerImage>
          {/* <LayerText className="a" src="assets/media_text_2.png"></LayerText> */}
          <div className="max-w-2xl text-gray-800">
            <div className="text-center mt-5">
              <div className="text-2xl font-bold">Only One</div>
              {/* <div className="text-sm font-bold">Today, and Beginning</div> */}
            </div>
            <div className="text-center">
              <div className="mt-5 text-base">
                오직 하나뿐인 당신에게 위로가 되는 메시지. 다양한 색깔을 가진
                ‘Only One’의 음악악으로 여러분의 귀와 마음에 힐링과 위로가
                되기를 바라며 공연을 제작하여 함께하고 있습니다.
              </div>
              <div className="mt-1 text-base text-gray-400">
                The only message that will comfort you. With the praise of "Only
                One" with various colors, we are producing and working together
                to heal and comfort your ears and heart.
              </div>
            </div>
          </div>
        </Layer>
      </LayerWrapper>
    </>
  );
};

// export const LayerWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
