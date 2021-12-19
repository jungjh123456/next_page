import React from "react";
import Image from "next/image";
import { HomeGoSection2Wrap } from "./homeGoStyle";

const HomeGoSection2 = () => {
  return (
    <HomeGoSection2Wrap>
      <div className="container">
        <h2>
          <span>우리아이 발달 선생님</span>
          <span>
            똑똑쌤만의 <span>특별한 홈티칭</span>
          </span>
        </h2>
        <div className="card_wrap">
          <div className="card">
            <div>
              <span>홈티칭 수업</span>
              <div>
                <span>부모님도 아이도 가장 편안한</span>
                <span>공간으로 찾아가는 발달치료 수업</span>
              </div>
            </div>
            <div className="img-card">
              <div className="img-wrap">
                <img src="/imgs/babyBook.png" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <span>홈티칭 수업</span>
              <div>
                <span>부모님도 아이도 가장 편안한</span>
                <span>공간으로 찾아가는 발달치료 수업</span>
              </div>
            </div>
            <div className="img-card">
              <div className="img-wrap">
                <img src="/imgs/babyBook.png" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <span>홈티칭 수업</span>
              <div>
                <span>부모님도 아이도 가장 편안한</span>
                <span>공간으로 찾아가는 발달치료 수업</span>
              </div>
            </div>
            <div className="img-card">
              <div className="img-wrap">
                <img src="/imgs/babyBook.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeGoSection2Wrap>
  );
};

export default HomeGoSection2;
