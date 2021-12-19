import React from "react";
import { HomeGoSection3Wrap } from "./homeGoStyle";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
const HomeGoSection3 = () => {
  return (
    <HomeGoSection3Wrap>
      <div className="container">
        <span>2021.12 집계 기준</span>
        <h2>
          <span>
            <span>총 2,312회 수업</span>으로
          </span>
          <span>검증된 똑똑쌤의 커리큘럼,</span>
          <span>지금도 찾아가고 있어요!</span>
        </h2>
        <div className="renge">
          <div>
            <span>4.8점</span>
            <span>평균 평점</span>
          </div>
          <span className="line"></span>
          <div>
            <span>4.8점</span>
            <span>평균 평점</span>
          </div>
          <span className="line"></span>
          <div>
            <span>4.8점</span>
            <span>평균 평점</span>
          </div>
        </div>
        {/* <div className="img-wrap">
            <img src="/imgs/sectionBgs.png" alt="" />
        </div> */}
      </div>
      <Image loader={myLoader} layout="responsive" objectFit="cover" src="/imgs/sectionBgs.png" alt="me" width="360px" height="386px" />
    </HomeGoSection3Wrap>
  );
};

export default HomeGoSection3;
