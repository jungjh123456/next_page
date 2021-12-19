import React from "react";
import ApplicationHeader from "../asset/ApplicationHeader";
import ArrowIcon from "../asset/ArrowIcon";
import BigButton from "../asset/BigButton";
import Progress from "../asset/Progress";
import WhiteArrow from "../asset/WhiteArrow";
import { ProgramCheckPageWrap } from "./applicationstyle";

const ProgramCheckPage = ({ percent }) => {
  return (
    <>
      <ApplicationHeader message={"프로그램 선택"} white />
      <ProgramCheckPageWrap>
        <div className="container">
          <div className="progress">
            <Progress prevPercent={percent} percent={percent} />
          </div>
          <h1>프로그램을 선택해주세요</h1>
          <div className="progrem_check-wrap">
            <input type="radio" id="program1" name="program" />
            <label htmlFor="program1">
              <div>
                <h2>발달 자극 프로그램</h2>
                <span>발달자극이 필요한 아동들을 대상으로 진행되는 똑똑쌤의 발달 자극 수업</span>
                <span>생후 15개월 - 만 3세 미만</span>
              </div>
              <div>
                <span>더보기</span>
                <WhiteArrow />
              </div>
            </label>
            <input type="radio" id="program2" name="program" />
            <label htmlFor="program2">
              <div>
                <h2>발달 자극 프로그램</h2>
                <span>발달자극이 필요한 아동들을 대상으로 진행되는 똑똑쌤의 발달 자극 수업</span>
                <span>만 3세 - 만 7세 대상</span>
              </div>
              <div>
                <span>더보기</span>
                <WhiteArrow />
              </div>
            </label>
          </div>
          <div className="btn-group">
            <BigButton>넘어가기</BigButton>
          </div>
        </div>
      </ProgramCheckPageWrap>
    </>
  );
};

export default ProgramCheckPage;
