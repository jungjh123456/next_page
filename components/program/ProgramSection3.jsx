import React from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { Program3Wrap } from "./ProgramStyle";
const ProgramSection3 = () => {
  return (
    <Program3Wrap>
      <div className="container">
        <h2>
          <span>조기개입 효과는 언어측면에서</span>
          <span>
            <span>약 85%</span> 더 높습니다.
          </span>
        </h2>
        <div className="text_gae">
          <span>36개월 이전의 영유아 언어발달이</span>
          <span>아이의 지능발달과 밀접한 관계가 있다는 사실,</span>
          <span>지연을 겪은 약 80% 아동이 영향을 줍니다.</span>
          <span>Silva et af, 1993</span>
        </div>
        <div className="imgwrap">
          <Image loader={myLoader} src="/imgs/progressImg.png" layout="responsive" objectFit="contain" alt="me" width="320" height="293" />
        </div>
      </div>
    </Program3Wrap>
  );
};

export default ProgramSection3;
