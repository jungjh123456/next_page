import React from "react";
import AppliHeader from "../../components/asset/AppliHeader";
import MainHeader from "../../components/asset/MainHeader";
import { StudyManageMentinfoContainerWrap } from "./myPageStyle";

const StudyManageMentinfoContainer = () => {
  return (
    <StudyManageMentinfoContainerWrap>
      <MainHeader applied white />
      <div className="container">
        <h2>언어발달 자극 프로그램</h2>
        <div className="teacher_info">
          <div>
            <span>담당 치료사</span>
            <span>강명실 선생님</span>
          </div>
          <div>
            <span>이용권</span>
            <span>24회 정기권</span>
          </div>
          <div>
            <span>등급</span>
            <span>프리미엄</span>
          </div>
        </div>
        <div className="study_log">
          <div className="card">
            <div>
              <span>6회차</span>
              <span>종료</span>
            </div>
            <div>
              <span>2021.11.24 (수) 15:30</span>
            </div>
          </div>
          <div className="card">
            <div>
              <span>6회차</span>
              <span>종료</span>
            </div>
            <div>
              <span>2021.11.24 (수) 15:30</span>
            </div>
          </div>
          <div className="card">
            <div>
              <span>6회차</span>
              <span>종료</span>
            </div>
            <div>
              <span>2021.11.24 (수) 15:30</span>
            </div>
          </div>
        </div>
      </div>
    </StudyManageMentinfoContainerWrap>
  );
};

export default StudyManageMentinfoContainer;
