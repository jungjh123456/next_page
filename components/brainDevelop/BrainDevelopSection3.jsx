import React from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { BrainDevelopSection3wrap } from "./brainDevelopStyle";
const BrainDevelopSection3 = () => {
  return (
    <BrainDevelopSection3wrap>
      <div className="container">
        <h2>
          <span>똑똑,</span>
          <span>우리 아이 발달자극도</span>
          <span>전문가와 상담하세요.</span>
        </h2>
      </div>
      <Image loader={myLoader} src="/imgs/babyinter.png" layout="responsive" objectFit="contain" alt="me" width="360" height="240" />
      <div className="container">
        <ul>
          <li>영유아에게 부담없는 놀이기반 자극수업</li>
          <li>아이의 발달상태 검사를 통한 발달자극</li>
          <li>아동발달 전문가 똑똑쌤의 부모님 1:1 코칭</li>
        </ul>
      </div>
    </BrainDevelopSection3wrap>
  );
};

export default BrainDevelopSection3;
