import {
  LayerWrapper,
  Layer,
  LayerImage,
  LayerText,
} from "../../../style/basic.style";

export const Answering = () => {
  return (
    <>
      <LayerWrapper>
        <Layer>
          <LayerImage src="assets/answering_image_1.png"></LayerImage>
          {/* <LayerText className="a" src="assets/answering_text_1.png"></LayerText> */}
          <div className="max-w-2xl text-gray-800">
            <div className="text-center mt-5">
              <div className="text-2xl font-bold"> Today’s Q.T.’</div>
            </div>
            <div className="text-center">
              <div className="mt-5 text-base">
                여러분들의 오늘은 어떠셨나요? 세상과 맞닿은 나. 오늘의 Q.T를
                통하여 세상 속의 ‘나’를 찾는 시간이 되기를 바랍니다.
              </div>
              <div className="mt-1 text-base text-gray-400">
                How was your day? I'm in touch with the world. I hope it will be
                time to find the world's "me" through Q.T. today
              </div>
            </div>
          </div>
        </Layer>
        <Layer>
          <LayerImage src="assets/answering_image_2.png"></LayerImage>
        </Layer>
      </LayerWrapper>
    </>
  );
};
