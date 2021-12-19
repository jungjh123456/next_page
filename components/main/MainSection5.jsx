import React, { useRef, useState } from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import { MainSection5Wrap } from "./mainComponentStyle";
import SectionSlick from "./SectionSlick";
const MainSection5 = () => {
  return (
    <MainSection5Wrap>
      <div className="container">
        <h2>믿을 수 있는 아동발달 전문가 똑똑쌤</h2>
        <div className="reason-text">
          <span>소중한 우리아이 성장을 위한</span>
          <span>
            <span>똑똑</span>쌤을 만나보세요!
          </span>
        </div>
        <div className="slider">
          <div>
            <div>
              <Image loader={myLoader} src="/imgs/slide1.png" layout="responsive" objectFit="contain" alt="me" width="264" height="360" />
            </div>
            <div>
              <Image loader={myLoader} src="/imgs/slide1.png" layout="responsive" objectFit="contain" alt="me" width="264" height="360" />
            </div>
            <div>
              <Image loader={myLoader} src="/imgs/slide1.png" layout="responsive" objectFit="contain" alt="me" width="264" height="360" />
            </div>
          </div>
        </div>
      </div>
    </MainSection5Wrap>
  );
};

export default MainSection5;
