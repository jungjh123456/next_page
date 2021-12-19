import React from "react";
import { SupportSection1Wrap } from "../support/supportStyle";
import { myLoader } from "../asset/myLoader";
import Image from "next/image";
import { BrainDevelopSection1Wrap } from "../brainDevelop/brainDevelopStyle";

const HomeGoSection1 = ({ applicationBtn }) => {
  return (
    <BrainDevelopSection1Wrap>
      <div className="container">
        <div className="piting">
          <h1>
            <span>찾아가는 아동 발달치료,</span>
            <span>맞춤형 영유아 아동발달자극 수업.</span>
          </h1>

          <span>맞춤형 영유아 아동발달자극 수업</span>
        </div>

        <div className="btn-group">
          <Image className="img-wrap" loader={myLoader} objectFit="contain" layout="responsive" src="/imgs/babyImg1.png" alt="me" width="325.73" height="360" />
          <div className="btn">
            <button onClick={applicationBtn}>지금 바로 똑똑쌤을 찾아보세요</button>
          </div>
        </div>
      </div>
    </BrainDevelopSection1Wrap>
  );
};

export default HomeGoSection1;
