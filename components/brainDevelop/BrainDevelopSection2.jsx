import React from "react";
import { Program3Wrap } from "../program/ProgramStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { BrainDevelopSection2Wrap } from "./brainDevelopStyle";
const BrainDevelopSection2 = () => {
  return (
    <BrainDevelopSection2Wrap>
      <div className="container">
        <h2>
          <span>생후 16 - 36개월</span>
          <span>
            영유아 <span>언어폭발기</span>
          </span>
        </h2>
        <div className="text_gae">
          <span>영유아 언어인지가 급격히 발전하는 두뇌 폭발기,</span>
          <span>건강한 발달자극으로 기초를 튼튼히 해보세요.</span>
        </div>
        <div className="imgwrap">
          <Image loader={myLoader} src="/imgs/languageImg.png" layout="responsive" objectFit="contain" alt="me" width="320" height="320" />
        </div>
      </div>
    </BrainDevelopSection2Wrap>
  );
};

export default BrainDevelopSection2;
