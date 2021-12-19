import React from "react";

import Image from "next/image";
import { myLoader } from "../asset/myLoader";

import { BrainDevelopSection6wrap } from "./brainDevelopStyle";
const BrainDevelopSection6 = () => {
  return (
    <BrainDevelopSection6wrap>
      {" "}
      <div className="container">
        <h2>
          <span>똑똑!</span>
          <span>수업은 어떻게 진행되나요?</span>
        </h2>
        <div className="study_way">
          <h3>
            <span>1.</span>
            <span>수업 전, 아동을 파악해요</span>
          </h3>
          <div>
            <span>수업 전, 간단한 발달검사를 통해</span>
            <span>아이의 성향과 발달 수준을 확인해요!</span>
          </div>
          <Image loader={myLoader} src="/imgs/babyTeacher.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200" />
        </div>
        <div className="study_way">
          <h3>
            <span>2.</span>
            <span>즐거운 홈티칭 놀이수업</span>
          </h3>
          <div>
            <span>아이와의 놀이수업을 통해 성향과 발달자극이</span>
            <span>필요한 부분을 파악하고, 발달을 도와요.</span>
          </div>
          <Image loader={myLoader} src="/imgs/babyTeacher.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200" />
        </div>
        <div className="study_way">
          <h3>
            <span>3.</span>
            <span>부모님과 1:1 발달코칭</span>
          </h3>
          <div>
            <span>수업내용과 부모님이 집에서 꼭 해주셔야</span>
            <span>할 자극과 방법에 대해 얄려드려요.</span>
          </div>
          <Image loader={myLoader} src="/imgs/babyTeacher.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200" />
        </div>
        <div className="study_way">
          <h3>
            <span>4.</span>
            <span>똑똑쌤 수업 알림장</span>
          </h3>
          <div>
            <span>오늘 진행된 수업의 내용과 어떤 발달자극을</span>
            <span>받았는지 알림장을 받아보세요.</span>
          </div>
          <Image loader={myLoader} src="/imgs/babyTeacher.png" layout="responsive" objectFit="contain" alt="me" width="320" height="200" />
        </div>
      </div>
    </BrainDevelopSection6wrap>
  );
};

export default BrainDevelopSection6;
