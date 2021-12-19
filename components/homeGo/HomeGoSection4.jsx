import React from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { BrainDevelopSection4wrap } from "../brainDevelop/brainDevelopStyle";

const HomeGoSection4 = () => {
  return (
    <BrainDevelopSection4wrap>
      <div className="container">
        <h2>
          <span>똑똑쌤 영유아 발달자극</span>
          <span>이런 아이들에게 추천해요!</span>
        </h2>
        <div className="tab-wrap">
          <input type="radio" id="tab_1" name="tab_brain" />
          <label htmlFor="tab_1">언어자극 프로그램</label>
          <input type="radio" id="tab_2" name="tab_brain" />
          <label htmlFor="tab_2">놀이자극 프로그램</label>
        </div>
        <div className="contents-wrap">
          <Image loader={myLoader} src="/imgs/chImg.png" layout="responsive" objectFit="contain" alt="me" width="320" height="206" />
          <ul>
            <li>신체발달 정상이지만 언어발달이 느린아이</li>
            <li>언어표현이 원활하지 않아 예민한 아이</li>
            <li>비교적 또래에 어휘력이 부족한 아이</li>
            <li>원하는게 있을 때 말하는 대신 우는 아이</li>
            <li>발은을 정확하게 말하지 못하는 아이</li>
          </ul>
        </div>
      </div>
    </BrainDevelopSection4wrap>
  );
};

export default HomeGoSection4;
