import React from "react";
import { Program2Wrap } from "./ProgramStyle";

const ProgramSection2 = () => {
  return (
    <Program2Wrap>
      <div className="container">
        <h1>
          <span>편안한 집에서</span>
          <span>홈티칭 시작해보세요.</span>
        </h1>
        <div className="home_piting-wrap">
          <span>센터에 방문하기 어려우시지 않으신가요?</span>
          <span>우리아이가 가장 편안하게 느끼는 공간에서</span>
          <span>똑똑쌤의 맞춤형 방문 수업을 경험해보세요.</span>
        </div>
        <div className="home-card">
          <div className="card1">
            <h3>홈티칭 이점 1</h3>
          </div>
          <div className="card1">
            <h3>홈티칭 이점 2</h3>
          </div>
          <div className="card1">
            <h3>홈티칭 이점 3</h3>
          </div>
        </div>
      </div>
    </Program2Wrap>
  );
};

export default ProgramSection2;
